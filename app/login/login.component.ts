import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
// import { user, UserResponse } from '../../_model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  loginForm: FormGroup;
  submitted = false;
  showRegister= false;
  a:any;
  
  constructor(private formBuilder:FormBuilder,  private router: Router,private route: ActivatedRoute, private http: HttpClient)
  { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(this.returnUrl)
  }
  get form() {return this.loginForm.controls}

  onSubmit() {
    var pass : any;
    this.http.get<UserResponse>('http://localhost:3000/user?userName='+this.form.username.value).subscribe(data=> {
      this.a = data;
        for(let user of this.a){
          pass = user.password;
          console.log(pass + " " + this.form.password.value);
        };
    });
   
    this.submitted = true;
    this.showRegister=true;
    console.log("Loged by Username:"+this.form.username.value+" and password: "+this.form.password.value);
    if( this.form.password.value === pass ){
      console.log('logged suck shit');
      this.router.navigate([this.returnUrl]);
    }
    if (this.loginForm.invalid) {
      console.log('logged fail');
        return;
    }
  }
}
interface DataResponse {
  userId: string;
  id: string;
  title: string;
}
interface UserResponse{
  id:number;
  firstName:string;
  lastName:string;
  userName:string;
  password:string;
  phone:number;
  birthday:string;
  gender:string;
  country?:string;
  email:string; 
}