import { Component, OnInit } from '@angular/core';

import { EmitService } from '../services/emit.service';
import { FirebaseService } from '../services/firebase.service';

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
    password: null,
    quota1: 0,
    quota2: 0,
    quota3: 0,
    quota4: 0,
    quota5: 0,
    quota6: 0,
    quota7: 0,
    quota8: 0,
    averageQuota: 0,
  }

  constructor( private emitService: EmitService, private firebaseService: FirebaseService) { }

  ngOnInit() { }

  clear() {
    this.user.firstname = null;
    this.user.lastname = null;
    this.user.username = null;
    this.user.password = null;
  }

  create() {
    this.firebaseService.createUser(this.user).subscribe((data) => {
      // need to check here if user already exists or not
      if (data) {
        this.emitService.emitUserCanAdvance(true);
      }
    })
  }
}