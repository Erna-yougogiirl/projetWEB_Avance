import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FakeSessionItemService} from '../fakesessionitem.service';
import { Sessionn } from '../sessionn';

@Component({
  selector: 'app-app-session-edit',
  templateUrl: './app-session-edit.component.html',
  styleUrls: ['./app-session-edit.component.css']
})
export class AppSessionEditComponent implements OnInit {
  id;
  private sub: any;
  sessionn:any;
  tracks = ['MEAN Stack', 'Angular',
  'NodeJS', 'Android', 'Swift', 'Xamarin'];
  constructor(private route: ActivatedRoute, private sessionItemService: FakeSessionItemService) { }
  ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
  this.id = params['id']; // (+) converts string 'id' to a number
  });
  console.log('Session ID ' + this.id.toString());
  this.sessionn = this.sessionItemService.getSession(this.id);
  }
  editSession(sessionItem) {
  console.log(sessionItem);
  }

} 
  