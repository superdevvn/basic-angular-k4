import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  code: string;
  name: string;
  isActive: boolean;
  manufacturer: string;
  price: string;
  combobox: {
    value: string;
    display: string;
  }[] = []
  constructor() {
    this.isActive = true;
    this.combobox.push({ value: "Dell", display: "Manu. Dell" },
      { value: "Asus", display: "Manu. Asus" },
      { value: "Acer", display: "Manu. Acer" });
  }

  ngOnInit() {
  }
  save() {
    $('#infoProduct').html(`${this.code} ${this.name} ${this.isActive} ${this.manufacturer} ${this.price}`);
    console.log(this.code);
    console.log(this.name);
    console.log(this.isActive);
    console.log(this.manufacturer);
  }
}
