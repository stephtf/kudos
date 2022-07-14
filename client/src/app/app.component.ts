import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Kudos';

  posts:any; 

  constructor(private service:PostService) {} 

  ngOnInit(): void {
    this.service.getPosts() 
    .subscribe(response => {
      this.posts = response;
    })
  }
}
