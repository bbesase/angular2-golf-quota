import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCreatingAccount: boolean = true;

  changeText() {
    this.isCreatingAccount = !this.isCreatingAccount;
  }
}
