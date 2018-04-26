import { Component, OnInit } from '@angular/core';
import { Data } from '../../constants/mock-data';
import { Router } from '@angular/router';

@Component({
  selector: 'data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  dataList = Data;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getDate(index: number) {
    return new Date(this.dataList[index].registered);
  }

  onItemClicked(id) {
    this.router.navigate([`/list/${id}`]);
  }
}
