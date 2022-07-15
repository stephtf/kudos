import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'http://localhost:3001/users';

   
  constructor(private httpClient: HttpClient) { }
  
  getUsers(){
    return this.httpClient.get(this.usersUrl);
  }

}

