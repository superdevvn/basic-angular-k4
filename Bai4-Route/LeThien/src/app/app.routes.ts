import { Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'list', component: DetailComponent },
];
