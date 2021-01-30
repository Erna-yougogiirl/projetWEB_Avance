import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { NavigationService } from '../navigation.service'
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-addformateur',
  templateUrl: './addformateur.component.html',
  styleUrls: ['./addformateur.component.css']
})
export class AddformateurComponent implements OnInit {

  constructor(private navigation : NavigationService) { }

  ngOnInit(): void {
  }
  addFormateur(formateur:NgForm){
    this.navigation.add(formateur);
  }

}
