import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;
  nu: string ='asdasd';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  get form() {return this.messageForm.controls}

  onSubmit() {
    this.submitted = true;
    
    console.log(this.form.name.value+": "+this.form.message.value);


    if (this.messageForm.invalid) {
        return;
    }

    this.success = true;
}

  

}
