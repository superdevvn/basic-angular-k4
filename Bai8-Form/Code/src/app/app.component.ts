import { Component } from '@angular/core';
import { User } from './models/user.model';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: User;

  userForm: FormGroup;

  constructor() {
    this.user = new User('Trang');

    this.userForm = new FormGroup({
      'username': new FormControl(undefined,
        [
          Validators.required,
          // Validators.pattern(new RegExp('[A-Za-z0-9]+', 'gi'))
        ]),
      'name': new FormControl('Trang',
        [Validators.required]),
      'password': new FormControl(undefined,
        [Validators.required]),
      'rePassword': new FormControl(undefined)
    });

    // this.userForm.controls['rePassword'].setAsyncValidators();

    this.userForm.controls['rePassword'].setValidators([
      Validators.required,
      this.passwordValidator()
    ]);
  }

  onFormSubmit() {
    console.log(this.userForm.value);
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      return control.value === this.userForm.controls['password'].value
        ? null
        : { matching: "2 passwords aren't matched" }
    };
  }
}
