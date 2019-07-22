import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
  this.signupForm = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, Validators.required)
  });
  
  // this.signupForm.valueChanges.subscribe(
  //   (value) => console.log(value)
  //   );
  }

  onSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
  }

  onReset() {
    this.signupForm.reset();
  }
}
