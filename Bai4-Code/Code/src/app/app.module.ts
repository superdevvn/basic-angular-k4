import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NumberPipe } from '../pipes/number-pipes';
import { DataListComponent } from './data-list/data-list.component';
import { Routes } from './app.routes';
import { DetailDataComponent } from './detail-data/detail-data.component';



@NgModule({
  declarations: [
    AppComponent,
    NumberPipe,
    DataListComponent,
    Routes,
    DetailDataComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
