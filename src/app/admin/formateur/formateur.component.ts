import { Component, Input, OnInit } from '@angular/core';
import {NavigationService} from '../navigation.service'
@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {
  @Input() formateur : any;
  constructor( private navigation : NavigationService) { }
  

  ngOnInit(): void {
  }
  supprimerFormateur(){
    this.navigation.delete(this.formateur);
  }

}
