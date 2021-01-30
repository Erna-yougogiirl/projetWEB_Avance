import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service'
@Component({
  selector: 'app-list-formateur',
  templateUrl: './list-formateur.component.html',
  styleUrls: ['./list-formateur.component.css']
})
export class ListFormateurComponent implements OnInit {
  formateurs;
  constructor( private navigation : NavigationService) { }

  ngOnInit(): void {
    this.formateurs=this.navigation.get()
  }

}
