import { Component } from '@angular/core';

import { EmitService } from './services/emit.service';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCreatingAccount: boolean = true;
  userCanAdvance: boolean = false;
  userInfo: any = {};

  constructor(private emitService: EmitService, private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.emitService.canUserAdvance.subscribe((value) => {
      this.userCanAdvance = value;
    });

    this.firebaseService.getUsers().subscribe((data) => {
      this.userInfo = data;
    });
  }

  changeText() {
    this.isCreatingAccount = !this.isCreatingAccount;
  }
}
