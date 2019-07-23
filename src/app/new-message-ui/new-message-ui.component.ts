import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-message-ui',
  templateUrl: './new-message-ui.component.html',
  styleUrls: ['./new-message-ui.component.scss']
})
export class NewMessageUiComponent implements OnInit {
  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'to': new FormControl(null, [Validators.required, Validators.email]),
      'cc': new FormControl(null),
      'bcc': new FormControl(null),
      'subject': new FormControl(null, Validators.required),
      'body': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
  }

  onReset() {
    this.signupForm.reset();
  }
}
