import { Component, Input, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string = "";
  @Input() appareilStatus: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor(){

    if(this.appareilStatus === "allume"){
      return "green";
    }
    else{
      return "red";
    }
   
  }

}
