import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor() { }

  navDoc(){
    window.open('https://quirky-nightingale-fa573a.netlify.com/docs/setup', '_blank');
  }

  navGit(){
    window.open('https://github.com/ripio/marmo-docs', '_blank');
  }

  ngOnInit() {
  }

}
