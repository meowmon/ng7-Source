import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService) { }
  sun : any;
  h1Style: boolean = false;
  ngOnInit() {
  }
  
  pages: number[] = [1,2,3,4];
  chosenPage=1;
  showPage(page: number){
    this.chosenPage = page;
  }
}
