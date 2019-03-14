import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

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
      console.log(this.users);
    })
  }
  @Input() page:number;
}

