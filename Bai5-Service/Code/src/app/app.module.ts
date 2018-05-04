import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NotificationComponent } from './notification/notification.component';
import { FormComponent } from './form/form.component';
import { NotificationService } from './notification-service.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
