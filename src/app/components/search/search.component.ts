import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  hasData:Boolean = false;
  searchResult:User[];

  searchTypes:string[] = ['Name', 'Email', 'ID'];

  constructor(private authService:AuthService, private alertService:AlertService) { }

  ngOnInit() {
  }

  onSubmitSearch(searchBy:string, searchTerm:string){
    console.log('searching for ' + searchTerm + ' by ' + searchBy);
    this.authService.searchQuery(searchBy, searchTerm, (res) => {
      if(res.success){
        this.searchResult = [];
        const userList = res.data;
        if(userList.length > 0){
        for(let i = 0; i < userList.length; i++){
          let newUser:User = new User();
          newUser.name = userList[i].name;
          newUser.email = userList[i].email;
          newUser.id = userList[i].id;
          this.searchResult.push(newUser);
        }
        this.hasData = true;
      }else{
        this.hasData = false;
      }
      }else{
        this.alertService.error(res.message);
      }
    });
  }

}
