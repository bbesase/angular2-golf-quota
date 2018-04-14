import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EmitService {
  canUserAdvance = new BehaviorSubject(false);

  emitUserCanAdvance(value) {
    this.canUserAdvance.next(value);
  }
}