import { Component, OnInit } from '@angular/core';
import {FakeSessionItemService} from '../fakesessionitem.service';
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  
  constructor(private sessionItemservice:FakeSessionItemService) { }
  nbSession(sessionItem): void {
   
    this.sessionItemservice
} 

  ngOnInit(): void {
  }
  
}
