import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
   { path: '', redirectTo: 'movies/page;page=1', pathMatch: 'full' },
   { path: 'movies/page', component: ContentComponent},
   { path: '**', component: NotfoundComponent }
];

