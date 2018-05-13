import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  links = [];
  constructor(private router: Router) {
  }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.splitLinks();
      }
    });
  }
  splitLinks() {
    const link = window.location.href;
    this.links = link.split(RegExp('/+'));
    this.links.shift();
    this.links.shift();
  }
}
