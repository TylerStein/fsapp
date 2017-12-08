import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class ValidateService {

  constructor() { }

  //Validate registration input
  //Callback(bool, string) tells if successful and provides error prompt if not
  validateRegister(user:User, callback:Function){
    //Validate user details
    if(!this.validateExists(user)){
      callback(false, 'Please enter all fields');
    }else if(!this.validateEmail(user.email)){
      callback(false, 'Please enter a valid email');
    }else{
      callback(true, 'User registered successfully');
    }
  }

  validateEmail(email:string):Boolean{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateExists(user:User):Boolean{
    if(user.name == undefined || user.email == undefined ||user.password == undefined
      || user.name == "" || user.email == "" ||  user.password == ""){
      return false;
    }
    return true;
  }

  validateLogin(user:User):Boolean{
    if(user.email == undefined || user.email == "" || user.password == undefined || user.password == ""){
      return false;
    }
    return true;
  }

}
