import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EmitService {
  canUserAdvance = new BehaviorSubject(false);
  userInfo = new BehaviorSubject(null);

  emitUserCanAdvance(value) {
    this.canUserAdvance.next(value);
  }

  emitUserInfo(info) {
    this.userInfo.next(info);
  }
}