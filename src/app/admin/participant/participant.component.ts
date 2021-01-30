import { Component, Input, OnInit } from '@angular/core';
import {NavigationService} from '../navigation.service'
@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  @Input() participant : any;
  constructor( private navigation : NavigationService) { }

  ngOnInit(): void {
  }
  supprimerpart(){
    this.navigation.deletepart(this.participant);
  }

}
