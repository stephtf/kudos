import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Kudos';

  users:any; 
  kudos:any;

  constructor(private service:PostService) {} 

  ngOnInit(): void {
    this.service.getUsers() 
    .subscribe(response => {
      this.users = response;
    })

    this.service.getKudos() 
    .subscribe(response => {
      this.kudos = response;
    })
  }
}
