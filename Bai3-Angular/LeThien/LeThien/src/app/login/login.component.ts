import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  remember: boolean;


  constructor() {
    this.username='Thien';
    this.password='12345678';
   }

  ngOnInit() {
  }
  login(param: string){
    console.log(this.username)
    console.log(this.password)
    console.log(this.remember)
  }

}
