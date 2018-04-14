import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class FirebaseService {

  constructor( private http: Http) { }

  createUser(userInfo) {
    const url = 'https://angular2-quota.firebaseio.com/users.json';
    return this.http.post(url, userInfo)
      .map((res: Response) => {
        return res.json();
      });
  }

  getUsers() {
    const url = 'https://angular2-quota.firebaseio.com/users.json';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }
}