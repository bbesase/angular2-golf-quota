import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddGolferComponent } from './add-golfer/add-golfer.component';

@Component({
  selector: 'quota-golfer-table',
  templateUrl: 'golfer-table.component.html',
  styleUrls: ['./golfer-table.component.scss']
})

export class GolferTableComponent {
  displayedColumns = ['name', 'nickname', 'quota1', 'quota2', 'quota3', 'quota4', 'quota5', 'quota6', 'quota7', 'quota8', 'averageQuota'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  golferToAdd: any = {};

  constructor(public dialog: MatDialog) {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  addGolfer() {
    let dialogRef = this.dialog.open(AddGolferComponent, {
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.golferToAdd = result;
      console.log('golfertoadd', this.golferToAdd)
    })
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    a: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    b: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    c: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    d: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    e: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    f: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    g: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    h: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
  g: string;
  h: string;
}