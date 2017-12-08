import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Alert, AlertType } from '../models/alert.model';

@Injectable()
export class AlertService {
  private subject = new Subject<Alert>();
  private keepAfterRouterChange = false;

  constructor(private router: Router) {
    //Clear alert messages on route change if keepAfterRouteChange is false
    router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        if(this.keepAfterRouterChange){
          //Don't clear, but only keep for a single route change
          this.keepAfterRouterChange = false;
        }else{
          //Clear on route change
          this.clear();
        }
      }
    })
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  success(message:string, keepAfterRouteChange=false){
    this.alert(AlertType.Success, message, keepAfterRouteChange);
  }

  info(message:string, keepAfterRouteChange=false){
    this.alert(AlertType.Info, message, keepAfterRouteChange);
  }

  error(message:string, keepAfterRouteChange=false){
    this.alert(AlertType.Error, message, keepAfterRouteChange);
  }

  warn(message:string, keepAfterRouteChange=false){
    this.alert(AlertType.Warning, message, keepAfterRouteChange);
  }

  alert(type: AlertType, message: string, keepAfterRouteChange = false){
    this.keepAfterRouterChange = keepAfterRouteChange;
    this.subject.next(<Alert>{type: type, message: message});
  }

  clear(){
    //clear alerts
    this.subject.next();
  }

}
