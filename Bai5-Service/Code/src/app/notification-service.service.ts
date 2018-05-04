import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NotificationService {
  notiEvent: EventEmitter<{ p1: string, p2: number }> = new EventEmitter();
  apiEvent = new EventEmitter<any>();

  constructor() { }

  loadAPI(result) {
    this.apiEvent.emit(result);
  }

  get() {
    setTimeout(() => {
      this.loadAPI(undefined);
    }, 1000);

    return this.apiEvent;
  }

  getPromise() {
    return new Promise<any>(resolve => {
      setTimeout(() => {
        resolve(undefined);
      }, 1000);
    });
  }
}
