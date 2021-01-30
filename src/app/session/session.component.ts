import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  alignment = "right";
  couleur = "red";
  @Input() session : any;
  constructor() { }

  ngOnInit(): void {
  }
  inscrire(){
    console.log("nouvelle inscription");
    this.session.participants = +this.session.participants +1 ;
    
     if (this.session.participant > 20){
       this.session.isCompleted = true;
     }
  }
  

}
