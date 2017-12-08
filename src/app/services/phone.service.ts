import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import * as sipjs from 'sip.js';
import * as config from '../config/config.json';

const defaultServer = config.default.fs_ws_domain;
const defaultDomain = config.default.fs_domain;
const defaultPassword = config.default.fs_password;

//Connection types, each type includes the last
const connectionType = ['text','audio','video'];

class UserConfig {
  uri: string;
  wsServers: string[];
  authorizationUser: string;
  password: string;
  register: boolean;

  constructor(){
    this.uri = '';
    this.wsServers = [''];
    this.authorizationUser = '';
    this.password = '';
    this.register = true;
  }

  AsJSON(){
    return {
      uri: this.uri,
      wsServers: this.wsServers,
      authorizationUser: this.authorizationUser,
      password: this.password,
      register: this.register
    }
  }
}

@Injectable()
export class PhoneService {
  userConfig:UserConfig;

  userAgent:sipjs.UA;
  userSession:sipjs.Session;

  messageListener:Function;

  constructor(private authService:AuthService) {
    this.userConfig = new UserConfig();
    if(authService.isUserLoggedIn()){
      this.initUserAgent();
    }
  }

  subscribeToMessages(listener:Function){
    this.messageListener = listener;
  }

  unsubscribeFromMessages(listener:Function){
    this.messageListener = undefined;
  }

  isSubscribedToMessages(listener:Function){
    return (this.messageListener === listener);
  }

  initUserAgent(){
    //Get logged user data
    console.log('initUserAgent: Creating config');

    this.loadUserConfig();
    this.clearSession();

    console.log('Preparing to create new user agent');

    //Create a new user agent based on this data
    this.userAgent = new sipjs.UA(this.userConfig.AsJSON());

    console.log('Created user agent with config: ' + JSON.stringify(this.userConfig.AsJSON()));

    this.userAgent.start();

    this.userAgent.on('connected',() => this.onConnected());
    this.userAgent.on('disconnected', () => this.onDisconnected());
    this.userAgent.on('registered', () => this.onRegistered());
    this.userAgent.on('unregistered', () => this.onUnregistered());
    this.userAgent.on('invite', (session) => this.onReceiveInvite(session));
    this.userAgent.on('message', (message) => this.onReceiveMessage(message));
  }

  clearSession(){
    if(this.userSession != undefined){
      this.userSession.terminate();
      this.userSession = undefined;
    }
  }

  stopUserAgent(){
    this.userAgent.stop();
  }

  hasUserAgent(){
    return (this.userAgent != undefined);
  }

  isUserAgentConnected(){
    return this.userAgent.isConnected();
  }

  isUserAgentRegistered(){
    return this.userAgent.isRegistered();
  }

  getUserConfig() : UserConfig {
    return this.userConfig;
  }

  onConnected() {
    console.log('[' + this.userConfig.uri + '] received onConnected');
  }

  onDisconnected() {
    console.log('[' + this.userConfig.uri + '] received onDisconnected');
  }

  onRegistered(){
    console.log('[' + this.userConfig.uri + '] received onRegistered');
  }

  onUnregistered(){
    console.log('[' + this.userConfig.uri + '] received onUnregistered');
  }

  onReceiveInvite(session:sipjs.Session){
    //Present dialogue box
    //On accept -> session.accept(), userSession = session
    //else -> session.reject();
    const senderUri = session.remoteIdentity.uri.toString();
    console.log('['+ senderUri +'] => [' + this.userConfig.uri + '] : [session invitation]');
    session.accept();
    this.userSession = session;
  }

  onReceiveMessage(message:sipjs.Message){
    const messageData = message.body;
    const messageUser = message.remoteIdentity.uri.user;
    const messageHost = message.remoteIdentity.uri.host;

    const senderUri = messageUser + '@' + messageHost;
    console.log('['+ senderUri +'] => [' + this.userConfig.uri + '] : ' + messageData);
    if(this.messageListener != undefined){
      this.messageListener(senderUri, messageData);
    }
  }

  sendMessage(clientUri:string, message:string){
    console.log('['+ this.userConfig.uri +'] => [' + clientUri + '] : ' + message);
    this.userAgent.message(clientUri, message);
  }

  sendInvite(clientUri:string){
    console.log('['+ this.userConfig.uri +'] => [' + clientUri + '] : [session invitation]');
    this.userSession = this.userAgent.invite(clientUri);
  }

  appendDomain(username:string){
    return (username + '@' + defaultDomain);
  }

  //Sets sip user config to match the logged in user
  loadUserConfig(){
    //Tell authservice to load in user data just in case
    this.authService.getUserData();

    //Grab the user data
    const userData = this.authService.user;

    console.log('loadUserConfig: loaded user: ' + userData.name + ' /id: ' + userData.id);

    //Update sip sip config
    this.applyUserConfig(userData.id.toString(), defaultPassword);
  }

  //Resets sip user config to default
  resetUserConfig(){
    this.applyUserConfig('default', defaultPassword);
  }

  //Changes sip user config to use given user and password combo
  applyUserConfig(userName:string, userPassword:string){
    this.userConfig.uri = userName + '@' + defaultDomain;
    this.userConfig.wsServers = [defaultServer];
    this.userConfig.authorizationUser = userName;
    this.userConfig.password = userPassword;
    this.userConfig.register = true;
  }



}
