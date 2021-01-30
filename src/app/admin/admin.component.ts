import { Component, OnInit } from '@angular/core';
import {FakeSessionItemService} from './fakesessionitem.service';
@Component({
  selector: 'app-admin',
  providers:[FakeSessionItemService],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
