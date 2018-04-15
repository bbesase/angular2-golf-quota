import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'add-golfer',
  templateUrl: './add-golfer.component.html',
  styleUrls: ['./add-golfer.component.scss']
})
export class AddGolferComponent {
  golfer: any = {
    name: '',
    firstname: '',
    lastname: '',
    nickname: '',
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

  displayError: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AddGolferComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  cancel() {
    this.dialogRef.close();
  }

  createGolfer() {
    if(this.golfer.firstname.length > 0 && this.golfer.lastname.length > 0) {
      this.golfer.name = `${this.golfer.firstname} ${this.golfer.lastname}`;
      this.dialogRef.close(this.golfer);
    }
    else {
      this.displayError = true;
    }
  }
}
