import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private validateService: ValidateService,
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = new User();
    user.email = this.user.email;
    user.password = this.user.password;

    //Clear existing alerts
    this.alertService.clear();
    //Validate login inputs
    if(this.validateService.validateLogin(user)){
      this.authService.logInUser(user, (result) => {
        console.log('authServiceLogIn res : ' + result);
        if(!result.success){
          //Problem with login info, display error
          this.alertService.error(result.message);
        }else{
          this.alertService.success('You are now logged in', true);
          this.router.navigate(['/dashboard']);
        }
      });


    }else{
      //Problem with login info, display error
      this.alertService.error('Please enter all fields', false);
    }
  }

}
