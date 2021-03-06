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

  createGolfer(golfer) {
    const url = 'https://angular2-quota.firebaseio.com/golfers.json';
    return this.http.post(url, golfer)
      .map((res: Response) => {
        return res.json();
      });
  }

  getGolfers() {
    const url = 'https://angular2-quota.firebaseio.com/golfers.json';
    return this.http.get(url)
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

  updateGolfers(userInfo) {

    const url = `https://angular2-quota.firebaseio.com/golfers/${userInfo.key}.json`;
    return this.http.put(url, userInfo)
      .map((res: Response) => {
        return res.json();
      });
  }
}