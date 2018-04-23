import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap',
  templateUrl: './baitap.component.html',
  styleUrls: ['./baitap.component.css']
})
export class BaitapComponent implements OnInit {

  name ='';
  pass ='';
  isMale: boolean;
  role:string;
  combobox:{
    value: string;
    display: string
  }
  constructor() {    
   }

  clickMe1(): void {
    console.log('ABC');
    console.log(this.isMale);
  }
  clickMe(param: string){
    console.log(param);
    console.log(this.isMale);
    console.log(this.name);
    console.log(this.pass);

  }

  ngOnInit() {
  }

}
