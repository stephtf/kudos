import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
newImageFile: any;
imageName: any; 
awsData: any; 
imageUrl: any;
testImage = `https://kudos2u.s3.amazonaws.com/04d1b1e0fedf87868f07a4051507719a`;

@Output() imageEvent = new EventEmitter<string>();

// get imageUrl from server 
private getUrl = 'http://localhost:3001/s3Url'

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

handleImageInput = (event: Event) => {
    this.newImageFile = (<HTMLInputElement>event.target).files; 
    this.imageName = this.newImageFile[0].name; 
}  

sendImage() {
  // grab the AWS secure link
  this.httpClient.get(this.getUrl).subscribe(response => {
  this.awsData = response;
  this.httpClient.put(this.awsData.url, this.newImageFile[0]).subscribe(data => data);

  // update db with imageUrl
  this.imageUrl = this.awsData.url.slice(0,65);
  this.imageEvent.emit(this.imageUrl);

  });

}

}






