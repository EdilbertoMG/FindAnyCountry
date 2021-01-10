import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// module
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ContinentsComponent } from './components/continents/continents.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// routes
import { routes } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AllContinentsComponent } from './components/all-continents/all-continents.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    LoadingComponent,
    ContinentsComponent,
    FavoritesComponent,
    NavbarComponent,
    AllContinentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( routes, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
