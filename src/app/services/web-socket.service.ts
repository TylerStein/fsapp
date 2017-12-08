import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';

/*export interface WebSocketData {
  type: string;
  body: {};
}*/

@Injectable()
export class WebSocketService {
  constructor() {}

  //private subject: Rx.Subject<MessageEvent>;

  private callbacks:Array<Function>;
  private ws:WebSocket;

  public easyCreate(url){
    if(!this.ws){
      this.ws = new WebSocket(url);
      this.callbacks = new Array<Function>();

      this.ws.onopen = () => this.easyDispatch('open', null);
      this.ws.onclose = () => this.easyDispatch('close', null);
      this.ws.onmessage = (event) => {
        //Get the JSON data from the MessageEvent object sent over WebSocket
        let messageData = JSON.parse(event.data);
        //Dispatch to find any callbacks binded to the event type and give returned data
        this.easyDispatch(messageData.event, messageData.data)
      };
    }
  }

  public easyBind(eventName:string, callback:Function){
    this.callbacks[eventName] = this.callbacks[eventName] || [];
    this.callbacks[eventName].push(callback);
    return this;
  }

  public easySend(eventName:string, eventData:any){
    let data = JSON.stringify({event:eventName, data:eventData});
    this.ws.send(data);
    return this;
  }

  private easyDispatch(eventName:string, message:JSON){
    let chain = this.callbacks[eventName];
    if(!chain){return;}
    for(let i = 0; i < chain.length; i++){
      chain[i](message);
    }
  }
}
