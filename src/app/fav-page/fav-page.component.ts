import { Component } from '@angular/core';
import { ProductsDataModel } from '../home-page/home-page.component';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-fav-page',
  standalone: true,
  imports: [MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardContent, CurrencyPipe, MatIcon, MatButtonModule, MatCard],
  templateUrl: './fav-page.component.html',
  styleUrl: './fav-page.component.scss'
})
export class FavPageComponent {
  favList: ProductsDataModel[] = [];
  constructor(private _favoriteService: FavoriteService, private _router: Router) { }
  ngOnInit() {
    this.favList = this._favoriteService.getFavorites();
  }
  removeFromFav(product: ProductsDataModel) {
    this._favoriteService.removeFromFav(product.id);
    this.favList = this.favList.filter(item => item.id !== product.id);
  }
  goToHomePage() {
    this._router.navigate([""]);
  }
}
