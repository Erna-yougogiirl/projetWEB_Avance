import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { NavigationService } from '../navigation.service'
@Component({
  selector: 'app-addparticipant',
  templateUrl: './addparticipant.component.html',
  styleUrls: ['./addparticipant.component.css']
})
export class AddparticipantComponent implements OnInit {

  constructor(private navigation:NavigationService) { }

  ngOnInit(): void {
  }
  addparticipant(participant:NgForm){
    this.navigation.addpart(participant);
  }

}
