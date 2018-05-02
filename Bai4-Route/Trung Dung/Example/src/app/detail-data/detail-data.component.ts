import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Data } from '../../constants/mock-data';

@Component({
  selector: 'detail-data',
  templateUrl: './detail-data.component.html',
  styleUrls: ['./detail-data.component.css']
})
export class DetailDataComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.data = Data.find(x => x.id === id);
  }

  getDataList(): object {
    const properties = [];

    for (const key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        properties.push({
          name: key,
          value: this.data[key]
        });
      }
    }

    return properties;
  }
}
