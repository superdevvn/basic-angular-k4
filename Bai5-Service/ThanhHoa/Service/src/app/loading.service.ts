import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class LoadingService {
  loadEvent: EventEmitter<number> = new EventEmitter();
  constructor() { }

}
