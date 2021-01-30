import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { NavigationService } from '../navigation.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(private navService: NavigationService) { }

  ngOnInit(): void {
  }
  toggleSideNav() {
    this.navService.setShowNav(true);
  }

}
