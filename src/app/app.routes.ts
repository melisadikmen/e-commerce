import { Routes } from '@angular/router';
import { BasketPageComponent } from './basket-page/basket-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FavPageComponent } from './fav-page/fav-page.component';

export const routes: Routes = [
    { path: "", component: HomePageComponent },
    { path: 'basket-page', component: BasketPageComponent },
    { path: 'home-page', component: HomePageComponent },
    { path: 'fav-page', component: FavPageComponent }
];
