const mysql = require('mysql');
const sqlconfig = require('../config/sqlconfig.js');

var pool = null;
var connection = null;

module.exports.Connect = function(done){
  pool = mysql.createPool(sqlconfig.usersConfig);
  console.log("Created mysql pool");
  pool.getConnection((err,con) => {
    if(err){
      console.log("(database.js) MySql pool threw an error: " + err);
      done();
    }else{
      console.log("(database.js) MySql connection successful!");
      connection = con;
      done();
    }
  });
}

module.exports.IsConnected = function(){
  return (connection !== null);
}

module.exports.Query = function(query, callback){
  if(connection){
    console.log("(database.js) Running query: " + query);
    connection.query(query, (err, rows) => {
      if(err){
        console.log("(database.js) MySql query threw error: " + err);
        callback({'Error':true, 'Result':err});
      }else{
        console.log("(database.js) Query result:" + JSON.stringify(rows));
        callback({'Error':false, 'Result':rows});
      }
    });
  }else{
    callback({'Error':true, 'Result':'No connection!'});
  }
}
