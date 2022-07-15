import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  users:any; 

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers() 
    .subscribe(response => {
      this.users = response;
    })
  }

}
