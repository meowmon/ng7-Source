import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService) { }

  h1Style: boolean = false;
  ngOnInit() {
    this.data.getUsers(1).subscribe(data => {
    this.max_pages = data;
    })
  }
  max_pages:Object;
  pages: number[] = [1,2,3,4];
  chosenPage=1;
  showPage(page: number){
    this.chosenPage = page;
  }
  Click() {
    console.log('clicked');
    this.h1Style = !this.h1Style;
  }

}
