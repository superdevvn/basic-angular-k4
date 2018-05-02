import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  username: string;
  password: string;
  isMale: boolean;
  role: string;
  combobox: {
    value: string;
    display: string
  }[] = [];
  constructor() { 
    this.username = "Peter";
    this.combobox.push({
      value: "AD",
      display: "Admin"
    });
    this.combobox.push({
      value: "MA",
      display: "Manager"
    });
  }

  ngOnInit() {
  }
  login(param: string){
    console.log(param);
    console.log(this.username);
    console.log(this.password);
    console.log(this.isMale);
    console.log(this.role);
  }

  add(value: string, display: string){
    // this.combobox.push({
    //   value: value,
    //   display: display
    // });
    this.combobox.push({value, display});
  }
}
