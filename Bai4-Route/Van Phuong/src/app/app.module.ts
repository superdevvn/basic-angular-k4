import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StructComponent } from './struct/struct.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BaitapComponent } from './baitap/baitap.component';
import { WordsComponent } from './words/words.component';
import { RouterComponent } from './router/router.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { LienheComponent } from './lienhe/lienhe.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { HttpModule } from '@angular/http';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import { RoundPipe } from './round.pipe';

const routesConfig: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'detail', component: ContactDetailComponent},
  {path: '', redirectTo: '/contacts', pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserFormComponent,
    StructComponent,
    SignInComponent,
    BaitapComponent,
    WordsComponent,
    RouterComponent,
    HeaderComponent,
    LienheComponent,
    ContactDetailComponent,
    ContactsComponent,
    PageNotFoundComponent,
    LearnPipeComponent,
    RoundPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
