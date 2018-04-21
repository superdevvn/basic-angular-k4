import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module1',
  template: `<h1 style="color : purple">This is Module2's Page1</h1>`
})
export class Page1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
