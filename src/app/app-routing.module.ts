import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContinentsComponent } from './components/continents/continents.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'continents/:region', component: ContinentsComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: 'search/:country', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];