import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isLoggingIn: boolean;
  invalidCredentials: boolean;

  constructor() { }

  ngOnInit() {
  }

  login() {
    this.isLoggingIn = true;
    setTimeout(() => {
      this.isLoggingIn = false;
      this.invalidCredentials = true;
      // change route to profile
      window.location.href = '#/dashboard';
    }, 3000);
  }

}
