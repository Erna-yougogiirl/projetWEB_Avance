import { Component, OnInit } from '@angular/core';
import {FakeSessionItemService} from '../fakesessionitem.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit { 
  constructor(private sessionItemservice:FakeSessionItemService) { }

  ngOnInit(): void {}
  addSession(sessionItem:NgForm): void {
      console.log(sessionItem) ;
      this.sessionItemservice.add(sessionItem);
 } 
}
