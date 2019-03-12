import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  showRegister= false;
  constructor(private formBuilder:FormBuilder)
  { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get form() {return this.loginForm.controls}

  onSubmit() {
    this.submitted = true;
    this.showRegister=true;
    console.log("Loged by Username:"+this.form.username.value+" and password: "+this.form.password.value);


    if (this.loginForm.invalid) {
        return;
    }
  }
}
