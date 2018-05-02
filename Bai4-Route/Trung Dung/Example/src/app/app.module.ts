import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NumberPipe } from '../pipes/number-pipe';
import { routes } from './app.routes';
import { DataListComponent } from './data-list/data-list.component';
import { RouterModule } from '@angular/router';
import { DetailDataComponent } from './detail-data/detail-data.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LinkComponent } from './multi-component/link/link.component';
import { NewsComponent } from './multi-component/news/news.component';
import { GameComponent } from './multi-component/game/game.component';


@NgModule({
  declarations: [
    NumberPipe,
    AppComponent,
    DataListComponent,
    DetailDataComponent,
    NotFoundComponent,
    LinkComponent,
    NewsComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
