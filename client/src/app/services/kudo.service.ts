import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KudoService {
  // delete and put 
  private kudosById = 'http://localhost:3001/kudos/62b8546dbf9d7ae41e70c06d'
  // get
  private kudosByUserId = 'http://localhost:3001/kudos/62b85458bf9d7ae41e70c06a'
  // post
  private kudosPost = 'http://localhost:3001/kudos'

  
  constructor(private httpClient: HttpClient) { }

  deleteKudosById() {
    return this.httpClient.delete(this.kudosById);
  }

  updateKudosById(updatedKudo: any) {
    return this.httpClient.put(this.kudosById, updatedKudo).subscribe(data => data);
  }

  getKudosByUserId() {
    return this.httpClient.get(this.kudosByUserId);
  }

  postNewKudo(newKudo: any) {
    return this.httpClient.post(this.kudosPost, newKudo);
  }
}
