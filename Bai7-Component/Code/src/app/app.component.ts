import {
  Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, ViewChild
} from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  title = 'app';
  homeMessage = 'Hello Home';

  @ViewChild('home') homeComponent: HomeComponent;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('AppComponent', 'ngOnChanges');
  }
  ngOnInit(): void {
    console.log('AppComponent', 'ngOnInit');
  }
  ngDoCheck(): void {
    console.log('AppComponent', 'ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('AppComponent', 'ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('AppComponent', 'ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('AppComponent', 'ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('AppComponent', 'ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('AppComponent', 'ngOnDestroy');
  }

  callHome() {
    // this.homeComponent.doSomething();
    this.homeMessage += '!';
  }

  onHomeCall(message: string) {
    console.log(message);
  }
}
