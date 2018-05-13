import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { AppComponent } from './app.component';



export const routes: Routes = [
    { path: '', redirectTo: '/browse-page', pathMatch: 'full' },
    { path: 'browse-page', component: PagesComponent },
    // { path: 'browse-page/:page', component: PagesComponent }

];

// export const routes: Routes = [
//     { path: '', component: AppComponent },
//     { path: 'browse-page/:page', component: PagesComponent }

// ];