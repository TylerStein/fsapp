import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService:AuthService,
    private router:Router,
    private alertService:AlertService){

    }

  canActivate(){
    if(this.authService.isUserLoggedIn()){
      return true;
    }else{
      this.alertService.info('You must be logged in to view that page', true);
      this.router.navigate(['/login']);
      return false;
    }
  }
}
