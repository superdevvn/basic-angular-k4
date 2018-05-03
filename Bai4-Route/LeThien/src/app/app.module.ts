import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    NavbarComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
