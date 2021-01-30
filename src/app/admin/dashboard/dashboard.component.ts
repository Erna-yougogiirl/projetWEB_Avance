import { Component, OnInit } from '@angular/core';
import {FakeSessionItemService} from '../fakesessionitem.service';
import { SESSIONITEMS } from '../sessions';
import {NavigationService} from '../navigation.service'
import {FORMATEURS} from '../formateurs'
import { PARTICIPANTS } from '../participants';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nbsession=SESSIONITEMS.length;
  nbformateur=FORMATEURS.length;
  nbparticipant=PARTICIPANTS.length;
  
  constructor( private sessionItemService : FakeSessionItemService) { }
  
  ngOnInit(): void {
  }
  meanstack=this.sessionItemService.sessionpartrack("MEAN Stack");
  android=this.sessionItemService.sessionpartrack("Android");
  ionic=this.sessionItemService.sessionpartrack("Ionic");
  angular=this.sessionItemService.sessionpartrack("Angular");
  nodejs=this.sessionItemService.sessionpartrack("NodeJS");
  Xamarin=this.sessionItemService.sessionpartrack("Xamarin");


  
}
