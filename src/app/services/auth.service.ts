import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { User } from '../models/user.model';
import { WebSocketService } from './web-socket.service';
import { tokenNotExpired } from 'angular2-jwt';
import * as config from '../config/config.json';

const WS_URL = config.default.api_ws_domain;

@Injectable()
export class AuthService {
  public user:User = null;
  authToken:any = null;

  constructor(private wsService:WebSocketService) {
      wsService.easyCreate(WS_URL);
    /*userSessionSerivce.subject.subscribe(res => {
      console.log("Response from Websocket @ auth.service: " + res);
    });*/
   }

  isUserLoggedIn() {
    return tokenNotExpired();
  }

  logOutUser(){
    this.user = null;
    this.authToken = null;
    localStorage.clear();
    //Tell database to log this user out
  }

  verifyUser(user:User, token:string, callback:Function){
    const data = {
      token: token,
      id: user.id,
      name: user.name,
      email: user.email
    }

    this.wsService.easySend('verify', data).easyBind('verify', (res) => {
      if(res.success){
        callback(true);
      }else{
        callback(false);
      }
    });
  }

  logInUser(user:User, callback:Function){
    //this.user = new User();
    const loginData = {
      email: user.email,
      password: user.password
    }
    this.wsService.easySend('authenticate', loginData)
      .easyBind('authenticate', (res)=>{
      if(res.success){
        this.user = new User();
        this.user.id = res.user.id;
        this.user.name = res.user.name;
        this.user.email = res.user.email;
        this.storeUserData(this.user, res.token);
        callback({success:true});
      }else{
        callback({success:false, message:res.message})
      }
    });
  }

  loadToken (){
    const token = localStorage.getItem('token');
    this.authToken = token;
  }

  storeUserData(user:User, token:any){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getUserData(){
    this.loadToken();
    this.user = new User();
    const localData = JSON.parse(localStorage.getItem('user'));
    this.user.email = localData.email;
    this.user.name = localData.name;
    this.user.id = localData.id;
    this.user.password = "";
  }

  //Takes in user data for Registration
  //Callback(boolean, message)
  registerUser(user:User, callback:Function){
    const userData = {
      name: user.name,
      email: user.email,
      password: user.password
    }

    //Send register data and listen for a response
    this.wsService.easySend('register', userData)
      .easyBind('register', (res) => {
        //let resJson = JSON.parse(res);
        if(res.success){
            callback(true, 'Registration successful');
        }else{
            callback(false, 'Registration failed');
        }
    });
  }

  deleteUser(user:User, callback:Function){
    this.loadToken();
    const data = {
      token: this.authToken,
      id: user.id,
      name: user.name,
      email: user.email
    }

    this.wsService.easySend('delete', data).easyBind('delete', (res) => {
      if(res.success){
        this.logOutUser();
        callback(true);
      }else{
        callback(false);
      }
    });
  }

  searchQuery(searchBy:string, searchTerm:string, callback:Function){
    this.getUserData();
    const data = {
      token: this.authToken,
      user: {
        name: this.user.name,
        email: this.user.email
      },
      searchTerm: searchTerm,
      searchBy: searchBy
    }

    this.wsService.easySend('searchQuery', data).easyBind('searchQuery', (res) => {
      if(res.success){
        console.log('searchQuery success, data: ' + res.data);
        callback({success:true, data:res.data});
      }else{
        callback({success:false, message:res.message});
      }
    });
  }
}
