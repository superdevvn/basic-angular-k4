import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  code: string;
  name: string;
  price: number;
  isActived: boolean;
  manufactorer: string;

  constructor() {
    this.code='SALE2018';
    this.name='Thien';

   }

  ngOnInit() {
  }
  save(param:string){
    console.log(param)
    console.log(this.code)
    console.log(this.name)
    console.log(this.price)
    console.log(this.isActived)
    console.log(this.manufactorer)
  

  }

}
