import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  //templateUrl: './sign-in.component.html',
  //styleUrls: ['./sign-in.component.css']

  template: `
  <form (click)="onSubmit(formSignIn);" #formSignIn="ngForm">
      <input placeholder="Email" [(ngModel)]="email" name="email">
      <br><br>
      <input type="password" placeholder="Password" [(ngModel)]="password" name="password">
      <br><br>
      <button>Submit</button>
  </form>
  `
})
export class SignInComponent implements OnInit {
  email = '';
  password = '';
  onSubmit(formSignIn){
    console.log(formSignIn.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
