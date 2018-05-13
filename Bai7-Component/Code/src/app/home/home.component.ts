import {
  Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, EventEmitter, Input, Output
} from '@angular/core';
import { EventService } from '../event.service';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  subscriber: Subscriber<void>;
  showHome: boolean;
  @Input() message: string;
  @Output() callApp: EventEmitter<string> = new EventEmitter<string>();

  constructor(private event: EventService) {
    this.subscriber = this.event.doSomething.subscribe(() => {
      // DO SOMETHING
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('HomeComponent', 'ngOnChanges');
  }
  ngOnInit(): void {
    console.log('HomeComponent', 'ngOnInit');
  }
  ngDoCheck(): void {
    console.log('HomeComponent', 'ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('HomeComponent', 'ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('HomeComponent', 'ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('HomeComponent', 'ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('HomeComponent', 'ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('HomeComponent', 'ngOnDestroy');
    this.subscriber.unsubscribe();
    console.log(this.event.doSomething);
  }

  doSomething() {
    console.log('doSomething');
  }

  onCallClick() {
    this.callApp.emit('Hello App');
  }
}
