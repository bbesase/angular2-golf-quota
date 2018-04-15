import { Component, OnInit, Input } from '@angular/core';

import { EmitService } from '../services/emit.service';

import { includes, find } from 'lodash';

@Component({
  selector: 'quota-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  @Input() storedUsers;

  errorMessage: boolean = false;
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
  }

  _setErrorMessage(value) {
    this.errorMessage = value;
  }

  clear() {
    this.user.username = null;
    this.user.password = null;
  }

  login() {
    let userArray = [this.storedUsers];
    let storedUserInfo = find(this.storedUsers, ['username', this.user.username])
    if (!includes(this.storedUsers, this.user.username)) {
      if(storedUserInfo.username === this.user.username && storedUserInfo.password === this.user.password) {
        this.emitService.emitUserCanAdvance(true);
        this._setErrorMessage(false)
        this.emitService.emitUserInfo(storedUserInfo);
      }
      else {
        this._setErrorMessage(true);
      }
    }
    else {
      this._setErrorMessage(true);
    }
  }
}