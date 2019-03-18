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
  infoSubmitted=false;
  infoInput=  false;
  genders: string[] = ["Male", "Female", "Others"];
  myControl = new FormControl();
  acceptted=false;
  countryNames;

  constructor(private formBuilder: FormBuilder) {
    this.loadName();
  }

  ngOnInit() {
  this.accountForm = this.formBuilder.group(
    { 
      firstName: ['',Validators.compose([Validators.required,Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$')])],
      lastName:  ['',Validators.required],
      userName:  ['',Validators.required],
      password:  ['',Validators.compose([ Validators.required, Validators.minLength(6), Validators.maxLength(36),Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])],
      cfpassword:['',Validators.required],
    });
  this.infoForm = this.formBuilder.group({
    birthday :['', Validators.required],
    gender: new FormControl(this.genders[0], Validators.required),
    country: ['', Validators.required],
    email:['', Validators.required],
    phone:['', Validators.compose([Validators.required, Validators.maxLength(10),Validators.minLength(10)])]
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
  infoSubmit(){
    this.infoSubmitted = true;
    console.log(
      this.info.birthday.value +" "+ this.info.gender.value+" "+this.info.country.value+" "+this.info.email.value+" "+this.info.phone.value
    )
    if (this.infoForm.invalid)
      return;
  }

  visible = false;
  setUnvisible(){
    this.visible = false
  }
  setVisible(){
    this.visible = true
  }
  loadName(){
    var allCountry= 'america, britain, china,czech	,england	, holland, hong-kong, new-zealand, puerto-rico, slovak, south africa, south korea, south-africa, south-korea, trinidad & tobago, united-kingdom, united-states, vietnam ';
    
    this.countryNames = allCountry.split(/, +/g).map( function (country){
      return {
        value: country.toLowerCase(),
        display : country
      };
    });
  }
}
