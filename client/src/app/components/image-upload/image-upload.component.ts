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
imageLink: any; 

@Output() imageEvent = new EventEmitter<string>();

// get imageUrl from server 
private imageUrl = 'http://localhost:3001/s3Url'



  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

handleImageInput = (event: Event) => {
    this.newImageFile = (<HTMLInputElement>event.target).files; 
    this.imageName = this.newImageFile[0].name; 
}  

sendImage() {
  this.imageEvent.emit(this.imageName);
  // KudoComponent.kudoData.img_url = this.imageName;
  // KudoComponent.newKudoPost(); 
  this.postToAws();
}

postToAws() {
  this.imageLink = this.httpClient.get(this.imageUrl); 
  console.log(this.imageLink)
  
  this.httpClient.put(this.imageLink, this.newImageFile); 
}



}

// client-side: 
// don't forget to import this function generateUploadUrl() into the client side
// here we are fetching the url from the server 
// const { url } = await fetch("/s3Url").then(res => res.json()) 
// console.log(url) 
 
// put request to post an update to the S3 bucket 
// await fetch(url, {
//     method: "PUT",
//     headers: {
//         "Content-Type": "multipart/form-data"
//     },
//     body: this.newImageFile
// })

// upload new url to mongodb databse with user ID, then awaiting that, post the imageUrl to the html 
// make some value true, for when this first step is completed.  
// const imageUrl = url.split('?')[0]
// console.log(imageUrl); 