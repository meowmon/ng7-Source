import { Component, OnInit } from '@angular/core';
import { FormControl  } from '@angular/forms'

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss']
})
export class FormTestComponent implements OnInit {
  title = 'FormControls';
  myControl = new FormControl();
  names;
  constructor() {
    this.loadName();
   }


   ngOnInit() {
  }

  loadName(){
    var guysName= 'Hieu, Hoang, Ngan, Nga, Hang, Truong, Cuong';
    this.names = guysName.split(/, +/g).map( function (name){
      return {
        value: name.toLowerCase(),
        display : name
      };
    });
  }

}
