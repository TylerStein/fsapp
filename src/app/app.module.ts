//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AlertComponent } from './components/alert/alert.component';
import { SearchComponent } from './components/search/search.component';
import { PhoneComponent } from './components/phone/phone.component';

//Guards
import { AuthGuard } from './guards/auth.guard';

//Services
import { WebSocketService } from './services/web-socket.service';
import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';
import { AlertService } from './services/alert.service';
import { PhoneService } from './services/phone.service';

//Set up routes for the app
const appRoutes: Routes = [
  //Homepage path as default
  {path: '', component:HomeComponent},
  //Other component paths
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  //Add AuthGuard activation when trying to navigate to these pages
  //Prevents access when the user is not logged in
  {path: 'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  {path: 'search', component:SearchComponent, canActivate:[AuthGuard]},
  {path: 'phone', component:PhoneComponent, canActivate:[AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    AlertComponent,
    SearchComponent,
    PhoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    WebSocketService,
    AuthService,
    ValidateService,
    AlertService,
    AuthGuard,
    PhoneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
