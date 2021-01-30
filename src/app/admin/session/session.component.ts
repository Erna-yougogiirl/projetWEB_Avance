import { Component, Input, OnInit } from '@angular/core';
import {FakeSessionItemService} from '../fakesessionitem.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
@Input() session: any;
  constructor(private sessionItemservice:FakeSessionItemService) { }

  ngOnInit(): void {
  }
  onDelete()
  {
    console.log(this.session);
    this.sessionItemservice.delete(this.session);

  }
}