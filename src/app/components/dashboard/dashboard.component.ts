import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user:User = null;

  constructor(
    private authService:AuthService,
    private alertService:AlertService,
    private router:Router) { }

  ngOnInit() {
    if(!this.user){
      const userData = JSON.parse(localStorage.getItem('user'));
      this.user = new User();
      this.user.id = userData.id;
      this.user.email = userData.email;
      this.user.name = userData.name;
      this.user.password = "";
    }
  }

  onDeleteAccount() {
    //Verify this account login
    this.authService.verifyUser(this.user, localStorage.getItem('token'), (isVerified) => {
      if(isVerified){
          this.authService.deleteUser(this.user, (success) => {
            if(success){
            this.alertService.success('User account has been deleted', true);
            this.router.navigate(['/login']);
          }else{
            this.alertService.error('There was a problem deleting this user');
          }
          });
      }else{
        this.alertService.error('User data could not be verified, you do not have permission to delete this account!', false);
      }
    });
  }

}
