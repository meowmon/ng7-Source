import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MinLengthValidator, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  accountForm : FormGroup;
  infoForm : FormGroup;
  accountSubmitted=  false;
  infoSubmitted=  false;
  genders: string[] = ["Male", "Female"];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  this.accountForm = this.formBuilder.group(
    { 
      firstName: ['',Validators.required],
      lastName:  ['',Validators.required],
      userName: ['', Validators.required],
      password: ['',Validators.required, Validators.minLength(6), Validators.maxLength(36)],
      cfpassword: ['',Validators.required],
    })
  this.infoForm = this.formBuilder.group({

  })
  }
  get account() {
    return this.accountForm.controls
  }
  get info(){
    return this.infoForm.controls
  }
  accountSubmit(){
    console.log(this.account.firstName.value+this.account.userName+ this.account.password);
    this.accountSubmitted = true;
    if (this.accountForm.invalid) {
      return;
  }
  }

}
