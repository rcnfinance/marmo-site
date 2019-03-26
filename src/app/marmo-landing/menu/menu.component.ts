import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  features = false;
  libraries = false;
  mobile = false;
  menu = false;
  sectionFeat() {
    this.features = true;
    this.libraries = false;
  }

  sectionLib() {
    this.features = false;
    this.libraries = true;
  }

   mobileMenu() {
    this.mobile = !this.mobile;
  }

  hideMenu() {
    this.menu = !this.menu;
  }

  clearSec() {
    this.libraries = false;
    this.features = false;
  }

  ngOnInit() {
  }
}

