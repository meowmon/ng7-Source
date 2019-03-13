import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  firstClick(){
    return console.log('clicked');
  }
  getUsers(page: number){
    return this.http.get('https://reqres.in/api/users?page='+page)
  }
  getSingleUser(id : number){
    return this.http.get('https://reqres.in/api/users/'+id)
  }
}
