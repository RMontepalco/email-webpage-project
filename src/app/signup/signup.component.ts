import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
  this.signupForm = new FormGroup({
    'firstName': new FormControl(null, Validators.required),
    'lastName': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, Validators.required),
    'confirmPassword': new FormControl(null, Validators.required)
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
