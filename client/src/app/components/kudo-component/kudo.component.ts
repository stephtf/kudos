import { NgLocalization } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { KudoService } from '../../services/kudo.service';


@Component({
  selector: 'kudo-component',
  templateUrl: './kudo.component.html',
  styleUrls: ['./kudo.component.scss']
})
export class KudoComponent implements OnInit {
  @ViewChild('Formtext') input: any;
  
  kudos:any;
  // textData = '';


  @Input() kudoData = { 
    date:'', 
    text: '', 
    category: '', 
    img_url: '', 
    gif_url: '', 
    personal_notes: '', 
    user_id: '62b85458bf9d7ae41e70c06a', 
    timestamps: ''
  }

  constructor(private kudoService:KudoService) { }

  ngOnInit(): void {
    // get all kudos by user ID
    this.kudoService.getKudosByUserId() 
    .subscribe(response => {
      this.kudos = response;
    })
    // // delete kudo by kudo ID
    // this.kudoService.deleteKudosById() 
    // .subscribe(response => {
    //   this.deletekudos = response;
    // })
  }

  // update kudo by kudo ID
  public updateKudo = (data: any) => {
    console.log(data);
    // this.kudoData = data;
  }

  // post a new kudo (user ID required)
  public newKudoPost() {
    // this.textData = this.kudoData.text; 
    this.kudoService.postNewKudo(this.kudoData)
      .subscribe(data => {
        console.log(data); 
      })
  }

  onUpdate(event: Event) {
    this.kudoData.text = (<HTMLInputElement>event.target).value; 
  }
}


