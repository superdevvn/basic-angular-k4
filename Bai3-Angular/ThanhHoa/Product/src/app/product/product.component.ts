import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  code: string;
  name: string;
  manu: string;
  options: { value: string, display: string }[] = [];
  isActived: boolean;

  constructor() {
    this.options.push(
      { value: 'DELL', display: 'Dell' },
      { value: 'ASUS', display: 'Asus' },
      { value: 'ACER', display: 'Acer' }
    );
    this.isActived = true;
  }

  ngOnInit() {
  }
  logResults() {
    $('#demo').text(`${this.code} ${this.name} ${this.manu} ${this.isActived}`);
  }
}
