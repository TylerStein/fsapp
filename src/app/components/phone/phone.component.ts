import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../../services/phone.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  messageLog:String[];

  constructor(private phoneService:PhoneService) {
    this.messageLog = [];
    this.messageLog.push('Beginning of messages');
  }

  ngOnInit() {
    if(!this.phoneService.hasUserAgent()){
      this.phoneService.initUserAgent();
    }

    this.phoneService.subscribeToMessages((sender, message) => {
      this.OnReceiveMessage(sender, message);
    });

  }

  OnClickSend(recipentName:string, messageText:string){
    if(messageText != undefined && messageText != ""
      && recipentName != undefined && recipentName != ""){

        //todo: get recipent id from database based on name or something
      this.phoneService.sendMessage(this.phoneService.appendDomain(recipentName), messageText);
      this.messageLog.push('You: ' + messageText);
    }
  }

  OnClickClear(){
    this.messageLog = [];
  }

  OnReceiveMessage(senderUri:string, messageBody:string){
    this.messageLog.push(senderUri + ' : ' + messageBody);
  }
}
