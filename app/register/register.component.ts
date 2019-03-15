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
  infoInput=  true;
  genders: string[] = ["Male", "Female"];
  myControl = new FormControl();
  countryNames;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  this.accountForm = this.formBuilder.group(
    { 
      firstName: ['',Validators.required],
      lastName:  ['',Validators.required],
      userName:  ['',Validators.required],
      password:  ['',Validators.compose([ Validators.required, Validators.minLength(6), Validators.maxLength(36)])],
      cfpassword:['',Validators.required],
    });
  this.infoForm = this.formBuilder.group({
    birthday :['', Validators.required],
    gender: new FormControl(this.genders[0], Validators.required),
    country: ['', Validators.required],
    email:['', Validators.required],
    phonenumber:['', Validators.required],

  });
  }
  get account() { return this.accountForm.controls  }
  get info(){ return this.infoForm.controls  }
  accountSubmit(){
    console.log(this.account.firstName.value +"  "+ this.account.userName.value +"  "+ this.account.password.value);
    this.accountSubmitted = true;
    if(this.account.firstName.value != "" && this.account.userName.value != "" && this.account.password.value != "" && (this.account.password.value == this.account.cfpassword.value) && this.accountSubmitted)
    {
      this.infoInput = true;
    }
    console.log(this.accountSubmitted);

    if (this.accountForm.invalid) {
      return;
  }
  }
  visible = false;
  setUnvisible(){
    this.visible = false
  }
  setVisible(){
    this.visible = true
  }
  loadName(){
    var countrysName= 'america, britain, china,czech	,england	, holland	,hong-kong	,new-zealand	,puerto-rico	,slovak	,south africa	,south korea	,south-africa	,south-korea	KOR	ko-KR,trinidad & tobago	, united-kingdom, united-states, vietnam ';
    
    this.countryNames = countrysName.split(/, +/g).map( function (name){
      return {
        value: name.toLowerCase(),
        display : name
      };
    });
  }
}
