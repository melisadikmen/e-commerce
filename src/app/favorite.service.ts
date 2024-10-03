import { Injectable } from '@angular/core';
import { ProductsDataModel } from './home-page/home-page.component';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favList: ProductsDataModel[] = [];
  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        this.favList = JSON.parse(storedCart);
      }
    }
  }
  addFavorite(product: ProductsDataModel) {
    const existingProduct = this.favList.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 0) + 1;
    } else {
      this.favList.push({ ...product, quantity: 1 });
    }
    this.updateLocalStorage();
  }
  removeFromFav(productId: number) {
    this.favList = this.favList.filter((product: ProductsDataModel) => product.id !== productId);
    this.updateLocalStorage();
  }
  updateLocalStorage() {
    localStorage.setItem('favorite', JSON.stringify(this.favList));
  }
  getFavorites() {
    return this.favList;
  }
}
