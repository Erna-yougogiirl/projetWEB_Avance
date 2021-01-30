import { Component, OnInit } from '@angular/core';
import {FakeSessionItemService} from '../fakesessionitem.service';

@Component({
  selector: 'app-session-itel-list',
  templateUrl: './session-itel-list.component.html',
  styleUrls: ['./session-itel-list.component.css']
})
export class SessionItelListComponent implements OnInit {
  sessionItems;
  constructor( private sessionItemservice:FakeSessionItemService) { }
  ngOnInit(){
    this.sessionItems = this.sessionItemservice.get()
  }
}
