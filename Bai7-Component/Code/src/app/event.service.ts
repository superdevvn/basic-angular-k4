import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventService {
  doSomething: any = new EventEmitter<void>();

  constructor() { }

}
