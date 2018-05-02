import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../../../constant/data.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data = Data;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickItem(id) {
    this.router.navigate([`/detail/${id}`]);
  }

}
