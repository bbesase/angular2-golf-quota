import { Component, OnInit, Input } from '@angular/core';

import { EmitService } from '../services/emit.service';

import { includes } from 'lodash';

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

  constructor(private emitService: EmitService) { }

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
    let userArray = [this.storedUsers];
    if (!includes(!userArray[0], this.user.username)) {
      this.emitService.emitUserCanAdvance(true);
    }
  }
}