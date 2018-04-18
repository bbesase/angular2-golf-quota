import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddGolferComponent } from './add-golfer/add-golfer.component';
import { FirebaseService } from '../services/firebase.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

import { find, map } from 'lodash';

@Component({
  selector: 'quota-golfer-table',
  templateUrl: 'golfer-table.component.html',
  styleUrls: ['./golfer-table.component.scss']
})

export class GolferTableComponent {
  displayedColumns = [ 'addScore', 'name', 'nickname', 'quota1', 'quota2', 'quota3', 'quota4', 'quota5', 'quota6', 'quota7', 'quota8', 'averageQuota'];
  dataSource: MatTableDataSource<GolferData>;

  @Input() isAdmin;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  golfers: any = [];

  constructor(public dialog: MatDialog, private firebaseService: FirebaseService, private db: AngularFirestore) {
    this.dataSource = new MatTableDataSource([]);
    // Assign the data to the data source for the table to render
    this.firebaseService.getGolfers().subscribe((data) => {
      if (data) {
        this.golfers = Object.keys(data).map((key) => {
          let golferArr = data[key];
          golferArr.key = key;
          return golferArr
        });

        this.dataSource = new MatTableDataSource(this.golfers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }
  
  ngOnInit() {
    
  }
  
  _getAverageQuota(data) {
    let avg = (data.quota1 + data.quota2 + data.quota3 + data.quota4 + data.quota5 + data.quota6 + data.quota7 + data.quota8) / 8
    return Math.ceil(avg);
  }

  addScore(el, data) {
    let key = find(this.golfers, data);
    console.log('key', key)
    
    data.quota8 = data.quota7;
    data.quota7 = data.quota6;
    data.quota6 = data.quota5;
    data.quota5 = data.quota4;
    data.quota4 = data.quota3;
    data.quota3 = data.quota2;
    data.quota2 = data.quota1;
    data.quota1 = el.valueAsNumber;
    data.averageQuota = this._getAverageQuota(data);
    this.firebaseService.updateGolfers(key).subscribe((data) => {
      el.valueAsNumber = 0;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  addGolfer() {
    let dialogRef = this.dialog.open(AddGolferComponent, {
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      result.averageQuota = this._getAverageQuota(result);
      this.golfers.push(result);
      this.dataSource = new MatTableDataSource(this.golfers);
      this.firebaseService.createGolfer(result).subscribe((data) => {
      });
    })
  }
}

export interface GolferData {
  firstname: string;
  lastname: string;
  name: string;
  nickname: string;
  quota1: number;
  quota2: number;
  quota3: number;
  quota4: number;
  quota5: number;
  quota6: number;
  quota7: number;
  quota8: number;
  averageQuota: number;
}