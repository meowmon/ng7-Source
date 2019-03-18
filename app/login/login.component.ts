import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';

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
  constructor(private formBuilder:FormBuilder,  private router: Router,private route: ActivatedRoute,)
  { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/about';
    console.log(this.returnUrl)
  }
  get form() {return this.loginForm.controls}

  onSubmit() {
    this.submitted = true;
    this.showRegister=true;
    console.log("Loged by Username:"+this.form.username.value+" and password: "+this.form.password.value);
    if(this.form.username.value == "meowmon" && this.form.password.value == "2231996")
      this.router.navigate([this.returnUrl]);

    if (this.loginForm.invalid) {
        return;
    }
  }
}
