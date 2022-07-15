import { Component, OnInit } from '@angular/core';
import { KudoService } from '../../services/kudo.service';


@Component({
  selector: 'kudo-component',
  templateUrl: './kudo.component.html',
  styleUrls: ['./kudo.component.scss']
})
export class KudoComponent implements OnInit {

  kudos:any;

  constructor(private kudoService:KudoService) { }

  ngOnInit(): void {
    this.kudoService.getKudos() 
    .subscribe(response => {
      this.kudos = response;
    })
  }
}
