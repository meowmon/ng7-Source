import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = "Hiuhiu's First Angular"
  //or
  //appTitle = 'Hiuhius first app';

  constructor() { }

  ngOnInit() {
  }

}
