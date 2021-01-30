import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import {FORMATEURS} from './formateurs'
import {PARTICIPANTS} from './participants'
@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private showNav$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private router : Router) { 
    router.events.subscribe(() => {
      this.setShowNav(false);
    });
  }
  getShowNav(){
    return this.showNav$.asObservable();
  }

  setShowNav(showHide: boolean) {
    this.showNav$.next(showHide);
  }

  toggleNavState() {
    this.showNav$.next(!this.showNav$.value);
  }

  isNavOpen() {
    return this.showNav$.value;
  }
  delete(formateur) {
    let index;
    index = FORMATEURS.indexOf(formateur);
    if (FORMATEURS.indexOf(formateur) >= 0) {
    FORMATEURS.splice(index, 1);
    }
    }
    get(){return FORMATEURS}
    add(formateur) {
      FORMATEURS.push(formateur);
      }
      deletepart(participant) {
        let index;
        index = PARTICIPANTS.indexOf(participant);
        if (PARTICIPANTS.indexOf(participant) >= 0) {
        PARTICIPANTS.splice(index, 1);
        }
        }
        getpart(){return PARTICIPANTS}
        addpart(participant) {
          PARTICIPANTS.push(participant);
          }
}
