import { Routes } from '@angular/router';
import { DataListComponent } from './data-list/data-list.component';
import { DetailDataComponent } from './detail-data/detail-data.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {LinkComponent} from './multi-component/link/link.component';
import {NewsComponent} from './multi-component/news/news.component';
import {GameComponent} from './multi-component/game/game.component';
export const routes: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'list', component: DataListComponent },
    { path: 'list/:id', component: DetailDataComponent },
    { path:'link',component:LinkComponent},
    { path:'news',component:NewsComponent},
    { path:'game',component:GameComponent},
    { path: '**',  component: NotFoundComponent}
];
