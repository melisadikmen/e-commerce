import { Injectable } from '@angular/core';
import { ProductsDataModel } from './home-page/home-page.component';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  itemList: ProductsDataModel[] = [];
  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        this.itemList = JSON.parse(storedCart);
      }
    }
  }
  addCart(product: ProductsDataModel) {
    const existingProduct = this.itemList.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 0) + 1;
    } else {
      this.itemList.push({ ...product, quantity: 1 });
    }
    this.updateLocalStorage();
  }
  removeFromCart(productId: number) {
    this.itemList = this.itemList.filter((product: ProductsDataModel) => product.id !== productId);
    this.updateLocalStorage();
  }
  updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.itemList));
  }
  getCart() {
    return this.itemList;
  }
}
