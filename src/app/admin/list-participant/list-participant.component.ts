import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service'
@Component({
  selector: 'app-list-participant',
  templateUrl: './list-participant.component.html',
  styleUrls: ['./list-participant.component.css']
})
export class ListParticipantComponent implements OnInit {
  participants;
  constructor(private navigation : NavigationService) { }

  ngOnInit(): void {
    this.participants=this.navigation.getpart()
  }

}
