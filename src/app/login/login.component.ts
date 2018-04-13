import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quota-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  user: any = {
    username: null,
    password: null
  }

  constructor() { }

  ngOnInit() { }

  clear() {
    this.user.username = null;
    this.user.password = null;
  }

  login() {
    console.log('logged in')
    // login logic goes here
  }
}