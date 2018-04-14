import { Component } from '@angular/core';

import { EmitService } from './services/emit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCreatingAccount: boolean = true;
  userCanAdvance: boolean = false;

  constructor(private emitService: EmitService) {}

  ngOnInit() {
    this.emitService.canUserAdvance.subscribe((value) => {
      this.userCanAdvance = value;
    });
  }

  changeText() {
    this.isCreatingAccount = !this.isCreatingAccount;
  }
}
