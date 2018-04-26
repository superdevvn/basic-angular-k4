import { Routes } from '@angular/router';
import { DataListComponent } from './data-list/data-list.component';
import { DetailDataComponent } from './detail-data/detail-data.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'list', component: DataListComponent },
    { path: 'list/:id', component: DetailDataComponent },
    { path: '**',  component: NotFoundComponent}
];
