import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DataListComponent } from './data-list/data-list.component';
import { DetailDataComponent } from './detail-data/detail-data.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { NumberPipe } from '../pipes/number-pipe';
import { routes } from './app.routes';
@NgModule({
  declarations: [
    NumberPipe,
    AppComponent,
    DataListComponent,
    DetailDataComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
