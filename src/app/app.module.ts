import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { environment } from '../environments/environment';

import { AddGolferComponent } from './table/add-golfer/add-golfer.component';
import { CreateAccountComponent } from './login/create-account.component';
import { GolferTableComponent } from './table/golfer-table.component';
import { LoginComponent } from './login/login.component';

import { FirebaseService } from './services/firebase.service';
import { EmitService } from './services/emit.service';

import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';

const appRoutes: Routes = [
  { path: 'login', component: AppComponent },
  { path: 'quota', component: AppComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AddGolferComponent,
    CreateAccountComponent,
    GolferTableComponent,
    LoginComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  entryComponents: [
    AddGolferComponent
  ],
  providers: [
    AngularFireDatabase,
    AngularFireDatabaseModule,
    EmitService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
