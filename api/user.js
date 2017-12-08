const md5 = require('MD5');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const database = require('./database.js');
const jwtConfig = require('../config/jwtconfig.js');
const freeswitch = require('./freeswitch.js');

module.exports.Logout = function(data, callback){
  console.log("(user.js/Logout) Logging out user");
  const user = data.user;
  const token = data.token;

  //Authenticate token, ignore timestamps
  let decoded = jwt.verify(token, jwtConfig.secret, {ignoreExpiration:true}, (err, decoded) => {
    if(!err){
      //Token valid
      //Log out user from active database
    }else{
      //Token invalid
      callback({success:false, message:'Invalid token'});
    }
  })

  //return {success:true, message:"Successfully logged out user"};
}

module.exports.Register = function(data, callback){
  console.log("(user.js/Register) Registering user with email: " + data.email);
  //Make sure there isnt already a user with matching email
  QueryUsersByEmail(data.email, (res) => {
    if(res.success){
      //User is not unique
      console.log("(user.js/Register) Attempted to register user with existing email");
      callback({success:false, message:'A user with that email already exists'});
    }else{
      //User is unique, hash the password
      bcrypt.genSalt(10,(err, salt) => {
        bcrypt.hash(data.password, salt, (err, hash) => {
          if(err) {throw err;}
          console.log("(user.js/Register) Hashed password, adding user to database");
          AddUserData(data.name, data.email, hash, (success) => {
            if(success){
              //User added successfully
              console.log("(user.js/Register) User successfully added to database");
              callback({success:true, message:'User added successfully'});
            }else{
              console.log("(user.js/Register) Failed to add user to database");
              callback({success:false, message:'Problem adding new user to database'});
            }
          });
        })
      });
    }
  });
}

module.exports.Verify = function(data, callback){
  const token = data.token;
  const userData = {
    id:data.id,
    email:data.email,
    name:data.name
  }
  VerifyJWT(token, userData, (res) => {
    if(res.success){
      callback({success:true});
    }else{
      callback({success:false});
    }
  });
}

module.exports.Authenticate = function(data, callback){
  const email = data.email;
  const password = data.password;

  console.log("(user.js/authenticate) Authenticating user with email: " + email);
  //Check if user exists (query db by email)
  QueryUsersByEmail(email, (res) => {
    if(res.success){
      const userData = res.data;
      //Compare encrypted passwords
      bcrypt.compare(password, userData.password, (err, match) => {
        if(err) {throw err;}
        if(match){
          const token = jwt.sign(
            {data:userData},
            jwtConfig.secret,
            jwtConfig.expiry);
          console.log("(user.js/authenticate) Successfully authenticated user");
          callback({
            success:true,
            //JWT + token
            token: token,
            user: {
              id: userData.id,
              name: userData.name,
              email: userData.email
            }
          });
        }else{
          console.log("(user.js/authenticate) Incorrect password");
          callback({success:false, message: "Incorrect password"});
        }
      });
    }else{
      console.log("(user.js/authenticate) User not found");
      callback({success:false, message:"User not found"});
    }
  });
}

//Delete a user
//data {token, id, email, name}
//callback: {success:boolean}
module.exports.Delete = function(data, callback){
  const token = data.token;
  const id = data.id;
  const user = { id: data.id, email: data.email, name: data.name }
  VerifyJWT(token, user, (res) => {
    if(res.success){
      RemoveUserData(id, (res) => {
        if(res.success){
          callback({success:true});
        }else{
          callback({success:false});
        }
      })
    }else{
      callback({success:false});
    }
  });
}

//Verify a token with user data
//userData: {id, email, name}
//token: JWT token
//callback: {success:boolean}
VerifyJWT = function(token, userData, callback){
   jwt.verify(token, jwtConfig.secret, (err, decoded) => {
     if(!err){
       console.log(decoded);
       console.log(JSON.stringify(decoded));
       //compare decoded data and ensure it matches
       callback({success:true});
     }else{
       callback({success:false});
     }
   });
}

//Find a user by Id
//callback: outgoing callback with JSON response
QueryUsersById = function(id, callback){
  const query = 'SELECT * FROM users WHERE id=\"' + id + '\" LIMIT 1';
  database.Query(query, (res) => {
    if(!res.Error && res.Result.length > 0){
      const userData = res.Result[0];
      callback({success:true, data:userData});
    }else{
      callback({success:false});
    }
  });
}

//Find users by name (May return any number of users)
//callback: outgoing with JSON response
QueryUsersByName = function(name, callback){
  const query = 'SELECT * FROM users WHERE name=\"' + name + '\"';
  database.Query(query, (res) => {
    if(!res.Error && res.Result.length > 0){
      const userData = res.Result;
      callback({success:true, data:userData});
    }else{
      callback({success:false});
    }
  });
}


//Find a user by email
//callback : outgoing callback with JSON response
QueryUsersByEmail = function(email, callback){
  const query = 'SELECT * FROM users WHERE email=\"' + email + '\" LIMIT 1';
  database.Query(query, (res) => {
    if(!res.Error && res.Result.length > 0){
      const userData = res.Result[0];
      callback({success:true, data:userData});
    }else{
      callback({success:false});
    }
  });
}

//Inserts a new user into the database and generates user profile file
//Callback: outgoing callback with JSON response
AddUserData = function(name, email, password, callback){
  const query = 'INSERT INTO users(name, email, password) VALUES(\"' + name + '\", \"' + email + '\", \"' + password + '\")';
  database.Query(query, (res) => {
    if(!res.Error){
      //New user added to db
      //Get the new user's id via email query
      QueryUsersByAny('email', email, (res) => {
        if(res.success){
          const uid = res.data[0].id;
          freeswitch.AddUserFile(uid, (success) => {
            if(success){
              callback({success:true});
            }else{
              callback({success:false});
            }
          });
        }else{
          callback({success:false});
        }
      });

    }else{
      callback({success:false});
    }
  });
}

//Removes a user from the database and deletes the user profile file
RemoveUserData = function(id, callback){
  const query = 'DELETE FROM users WHERE id=\'' + id + '\'';
  database.Query(query, (res) => {
    if(!res.Error){
      freeswitch.RemoveUserFile(id, (success) => {
        if(success){
          callback({success:true});
        }else{
          callback({success:false});
        }
      });
    }else{
      callback({success:false});
    }
  });
}

QueryUsersByAny = function(queryBy, queryValue, callback){
  const query = 'SELECT name,email,id FROM users WHERE ' + queryBy + '=' + '\'' + queryValue + '\'';
  database.Query(query, (res) => {
    if(!res.Error && res.Result.length > 0){
      const userList = res.Result;
      callback({success:true, data:userList});
    }else{
      callback({success:false});
    }
  });
}

//Make any query to the mysql database
//data : incoming JSON data
//callback : outgoing callback with JSON response
module.exports.Query = function(data, callback){
  VerifyJWT(data.token, data.user, (res) => {
    if(res.success){
      const query = data.query;
      if(!database.IsConnected()){
        callback({success:false, message:'Database not connected, cannot query'});
      }else{
        database.Query(query, (res) => {
          callback({success:true, rows:res});
        });
      }
    }else{
      callback({success:false, message:'Failed to verify user'});
    }
  });
}

//Make a query for user data given a search term and category
//data: incoming JSON data
//callback: outgoing callback with json response
module.exports.searchQuery = function(data, callback){
  VerifyJWT(data.token, data.user, (res) => {
    if(res.success){
      const searchBy = data.searchBy;
      const searchTerm = data.searchTerm;
      QueryUsersByAny(searchBy, searchTerm, (res) => {
        if(res.success){
          console.log('searchQuery success, userList: ' + res.data);
          callback({success:true, data:res.data})
        }else{
          callback({success:false, message:'No users match the given query'});
        }
      });

    }else{
      callback({success:false, message:'Failed to verify user'});
    }
  });
}
