import {Component, ViewEncapsulation, ViewChild} from '@angular/core';
import {MdSidenav} from '@angular/material';


@Component({
  moduleId: module.id,
  selector: 'sidenav-demo',
  templateUrl: 'sidenav-demo.html',
  styleUrls: ['sidenav-demo.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavDemo {
  invert = false;
  showTemporarySidenav = true;
  @ViewChild('temporarySidenav') temporarySidenav: MdSidenav;

  toggleTemporarySidenav() {
    this.temporarySidenav.toggle();
  }
}
