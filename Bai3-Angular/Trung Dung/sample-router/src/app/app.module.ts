import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'module1', pathMatch: 'full' },
      { path: 'module1',loadChildren:'./module1/module1.module#Module1Module'},
      { path: 'module2',loadChildren:'./module2/module2.module#Module1Module'}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
