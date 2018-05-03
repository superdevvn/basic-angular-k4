import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ContentComponent } from './content/content.component';
import { ListComponent } from './content/list/list.component';
import { DetailComponent } from './content/detail/detail.component';

import { routes } from './app.routes';
import { NotFoundComponent } from './not-found/app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumbComponent,
    ContentComponent,
    ListComponent,
    DetailComponent,
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
