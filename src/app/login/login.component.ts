import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'quota-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  @Input() storedUsers;

  user: any = {
    username: null,
    password: null
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.storedUsers) {
      if(!changes.storedUsers.firstChange) {
        this.storedUsers = changes.storedUsers.currentValue;
      }
    }

    console.log('current users', this.storedUsers)
  }

  clear() {
    this.user.username = null;
    this.user.password = null;
  }

  login() {
    console.log('logged in')
    // login logic goes here
  }
}