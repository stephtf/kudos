import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'http://localhost:3001/users';
  private kudosUrl = 'http://localhost:3001/kudos/62b716469b33e2919e32ee6f'
   
  constructor(private httpClient: HttpClient) { }
  
  getUsers(){
    return this.httpClient.get(this.usersUrl);
  }

  getKudos() {
    return this.httpClient.get(this.kudosUrl);
  }
  
}

