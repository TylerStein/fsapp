const fs = require('fs');
const fsconfig = require('../config/fsconfig');

//Use fs access to check if a file can be read
CanReadFile = function(filePath, callback){
  fs.access(filePath, fs.constants.R_OK, (err) => {
    if(err){
      console.log('Error at CheckFileAccess : ' + err);
      callback(false);
    }else{
      callback(true);
    }
  });
}

//Checks if a user file exists for the given ID
CheckUserFile = function(userid, callback){
  fs.stat(fsconfig.UserPath + userid + '.xml', (err, stats) => {
    if(err){
      callback(false);
    }else{
      callback(stats.isFile());
    }
  });
}

//Validates that a user id is within acceptable range and format
ValidateId = function(userid){
  return fsconfig.RegexId.test(userid);
}

//Adds a user file
module.exports.AddUserFile = function(userid, callback){
  if(!ValidateId(userid)){
    console.warn('!!WARNING!! Adding userID (' + userid + ') outside of given range! Please update the FreeSwitch config to compensate!');
  }

  CheckUserFile(userid, (success) => {
    if(success){
      console.log('(add) Userfile for ' + userid + ' already exists!');
      callback(true);
    }else{
      const defaultPath = fsconfig.UserPath + fsconfig.DefaultFileName;
      fs.readFile(defaultPath, (err, data) => {
        if(err){
          console.error('(add) Could not read userfile from ' + defaultPath);
          callback(false);
        }else{
          const templateString = data.toString();
          const newUserString = templateString.replace(fsconfig.RegexId, userid);
          const newPath = fsconfig.UserPath + userid + '.xml';
          fs.writeFile(newPath, newUserString, (err) => {
            if(err){
              console.error('(add) Could not write userfile for ' + newPath);
              callback(false);
            }else{
              console.log('(add) Created userfile ' + newPath);
              callback(true);
            }
          });//end writeFile
        }
      });//end readFile
    }
  });//end checkFile
}

//Removes a user file
module.exports.RemoveUserFile = function(userid, callback){
  CheckUserFile(userid, (success) => {
    if(success){
      fs.unlink(fsconfig.UserPath + userid + '.xml', (err) => {
        if(err){
          console.err(err);
          callback(false);
        }else{
          console.log('(delete) Deleted userfile for '+ userid);
          callback(true);
        }
      });
    }else{
      console.log('(delete) Userfile for ' + userid + ' does not exist');
      callback(true);
    }
  })
}
