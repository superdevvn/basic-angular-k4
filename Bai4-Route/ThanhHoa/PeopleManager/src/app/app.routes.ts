import { Routes } from '@angular/router';

import { ListComponent } from './content/list/list.component';
import { DetailComponent } from './content/detail/detail.component';

export const routes: Routes = [
   { path: '', redirectTo: '', pathMatch: 'full' },
   { path: 'list', component: ListComponent },
   { path: 'detail/:id', component: DetailComponent }
];
