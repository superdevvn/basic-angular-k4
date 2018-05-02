import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  links = [];
  constructor() {
  }
  ngOnInit() {
    this.splitLinks();
  }
  splitLinks() {
    const link = window.location.href;
    this.links = link.split(RegExp('/+'));
    this.links.shift();
    this.links.shift();
  }
}
