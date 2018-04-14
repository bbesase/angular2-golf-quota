import { Component, OnInit, Input } from '@angular/core';

import { EmitService } from '../services/emit.service';
import { FirebaseService } from '../services/firebase.service';

import { includes } from 'lodash';

@Component({
  selector: 'quota-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})

export class CreateAccountComponent implements OnInit {
  @Input() storedUsers;

  user: any = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    isAdmin: false
  }

  constructor( private emitService: EmitService, private firebaseService: FirebaseService) { }

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

  _createUser(user) {
    this.firebaseService.createUser(this.user).subscribe((data) => {
      if (data) {
        this.emitService.emitUserCanAdvance(true);
      }
    });
  }

  clear() {
    this.user.firstname = '';
    this.user.lastname = '';
    this.user.username = '';
    this.user.password = '';
  }

  create() {
    let userArray = [this.storedUsers];
    if(userArray.length > 0) {

      if (!includes(!userArray[0], this.user.username)) {
  
        this._createUser(this.user);
      }
      else {
        console.log('user exists already')
      }
    }
    else {
      this._createUser(this.user);
    }
  }
}