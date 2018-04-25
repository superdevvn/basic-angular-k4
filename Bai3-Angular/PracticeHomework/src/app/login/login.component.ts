import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  isRemember:boolean;
  constructor() {
  }


  ngOnInit() {
  }
  login(){
    $('#infoUser').html(`${this.userName} ${this.password} ${this.isRemember}`);
    console.log(this.userName);
    console.log(this.password);
    console.log(this.isRemember);
  }
}
