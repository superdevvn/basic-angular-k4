import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ChoiceComponent } from './choice/choice.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { LoadingService } from './Loading.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ChoiceComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
