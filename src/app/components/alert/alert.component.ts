import { Component, OnInit } from '@angular/core';
import { Alert, AlertType } from '../../models/alert.model';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  alerts: Alert[] = [];

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getAlert().subscribe((alert:Alert) => {
      if(!alert){
        //Clear alerts when empty alert is received
        this.alerts = [];
        return;
      }
      //Add alert to array
      this.alerts.push(alert);
    });
  }

  removeAlert(alert: Alert){
    //Set this.alerts to equal all alert that do not match the given object
    this.alerts = this.alerts.filter(x => x !== alert);
  }

  cssClass(alert: Alert){
    if(!alert){
      return;
    }

    switch(alert.type){
      case AlertType.Success:
        return 'alert alert-success';
      case AlertType.Info:
        return 'alert alert-info';
      case AlertType.Error:
        return 'alert alert-danger';
      case AlertType.Warning:
        return 'alert alert-warning';
    }
  }

}
