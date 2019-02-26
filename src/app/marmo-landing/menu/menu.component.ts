import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  features:boolean = false;
  libraries:boolean = false;
  mobile:boolean = false;
  menu:boolean = false;
  
  sectionFeat(){
    this.features = true;
    this.libraries = false;
  }

  sectionLib(){
    this.features = false;
    this.libraries = true;
  }

   mobileMenu(){
    this.mobile = !this.mobile;
  }

  hideMenu(){
    this.menu= !this.menu;
  }

  clearSec(){
    this.libraries = false;
    this.features = false;
  }

  ngOnInit() {
  }
}

