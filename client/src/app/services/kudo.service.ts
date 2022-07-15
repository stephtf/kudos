import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KudoService {
  private kudosUrl = 'http://localhost:3001/kudos/62b716469b33e2919e32ee6f'

  constructor(private httpClient: HttpClient) { }

  getKudos() {
    return this.httpClient.get(this.kudosUrl);
  }
}
