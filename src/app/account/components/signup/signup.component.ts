import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: string;
  password: string;
  isSigningUp: boolean;
  invalidCredentials: boolean;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit() {
  }

  signUp() {
    this.isSigningUp = true;
    setTimeout(() => {
      this.isSigningUp = false;
      this.invalidCredentials = true;
      // change route to profile
      window.location.href = '#/dasboard';
    }, 3000);
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

}
