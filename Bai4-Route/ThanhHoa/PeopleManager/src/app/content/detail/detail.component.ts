import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Data } from '../../../constant/data.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  data = Data;
  currentObj = {};
  currentObjToArray = [];
  constructor(private route: ActivatedRoute) {
    this.assignObj();
    this.parseToArray();
  }
  ngOnInit() {
  }

  assignObj(): void {
    const { id } = this.route.snapshot.params;
    // this.currentObj = this.currentObjToArray.filter(item => item.id === id);
    for (const item of this.data) {
      if (item.id === id.toString()) {
        this.currentObj = item;
        return;
      }
    }
  }

  parseToArray(): void {
    const keys: any = Object.keys(this.currentObj);
    const values: any = Object.values(this.currentObj);
    for (let i = 0; i < keys.length; i++) {
      // if (values[i] instanceof Array) {
      //   for (const iter of values[i]) {
      //     if (iter instanceof Object) {
      //     }
      //   }
      //   values[i] = values[i].join('<br/>');
      // }
      this.currentObjToArray.push(
        { key: keys[i], value: values[i] }
      );
    }
  }
}
