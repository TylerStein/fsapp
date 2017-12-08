import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(private validateService: ValidateService,
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    //Store user input data
    const user = new User();
    user.email = this.user.email;
    user.name = this.user.name;
    user.password = this.user.password;

    this.validateService.validateRegister(user, (success:Boolean, message:string) => {
      //Clear existing alert messages
      this.alertService.clear();
      if(!success){
        //Show message 'message'
        this.alertService.error(message, false);
        return;
      }else{
        //Validated, register
        this.authService.registerUser(user, (success:Boolean, message:string) => {
          if(success){
            //Successful register
            this.alertService.success(message, true);
            this.router.navigate(['/login']);
          }else{
            //Show register problem error
            this.alertService.error(message, true);
            this.router.navigate(['/register']);
          }
        });
      }
    });
  }

}
