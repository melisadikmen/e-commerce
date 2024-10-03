import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardsComponent } from "./cards/cards.component";
import { ProductsData } from '../models/example-data.const';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { MatBadge } from '@angular/material/badge';
import { MatButton } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchPipe } from '../search.pipe';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon'
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { FavoriteService } from '../favorite.service';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatCardModule, CardsComponent, MatBadge, MatButton, RouterLink, RouterModule, FontAwesomeModule, SearchPipe, MatInputModule, FormsModule, MatIconModule, MatIcon, ScrollToTopComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  searchText: any;
  products: ProductsDataModel[] = ProductsData;
  productsList: ProductsDataModel[] = [];
  favItemList: ProductsDataModel[] = [];
  favList: ProductsDataModel[] = [];
  itemList: ProductsDataModel[] = [];
  faCartShopping = faCartShopping;
  faHouse = faHouse;
  constructor(private _router: Router, private _productService: ProductService, private _favoriteService: FavoriteService, private _basketService: BasketService) { }
  ngOnInit() {
    this.favItemList = this._favoriteService.getFavorites();
    this.productsList = this._basketService.getCart();
  }
  goToBasket() {
    this._router.navigateByUrl("/basket-page");
  }
  goToFav() {
    this._router.navigateByUrl("/fav-page");
  }
  addToBasket(event: ProductsDataModel) {
    this._basketService.addCart(event);
    this.productsList = this._basketService.getCart();
  }
  addToFav(event: ProductsDataModel) {
    this._favoriteService.addFavorite(event);
    this.favItemList = this._favoriteService.getFavorites();
  }
}
export interface ProductsDataModel {
  id: number;
  name?: string;
  price?: number;
  category?: string;
  description?: string;
  image?: string;
  quantity?: number;
}
