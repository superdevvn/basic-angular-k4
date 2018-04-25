import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    ProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
