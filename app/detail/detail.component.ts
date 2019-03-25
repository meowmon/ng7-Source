import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  template: `<ul *ngIf="users">
  <li *ngFor="let user of users.data">
    <img [src]="user.avatar">
    <p>{{user.first_name}}{{user.last_name}} </p>
  </li>

</ul>`,
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private data: DataService) { }
  users: Object;
  ngOnInit() {
    this.data.getUsers(this.page).subscribe(data => {
      this.users = data;
      // console.log(this.users);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
    }
    )
  }
  @Input() page:number;
}

