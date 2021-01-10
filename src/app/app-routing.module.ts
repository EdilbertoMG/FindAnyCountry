import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContinentsComponent } from './components/continents/continents.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'continents/:region', component: ContinentsComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];