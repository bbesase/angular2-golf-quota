import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quota-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})

export class CreateAccountComponent implements OnInit {
  user: any = {
    firstname: null,
    lastname: null,
    username: null,
    password: null
  }

  constructor() { }

  ngOnInit() { }

  clear() {
    this.user.firstname = null;
    this.user.lastname = null;
    this.user.username = null;
    this.user.password = null;
  }

  create() {
    console.log('create clicked')
    // logic for logging in goes here
  }
}