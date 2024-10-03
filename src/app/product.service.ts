import { Injectable } from '@angular/core';
import { ProductsDataModel } from './home-page/home-page.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }
  private saveToLocalStorage(key: string, products: ProductsDataModel[]) {
    if (typeof window !== 'undefined' && window.localStorage) {
      const payload = JSON.stringify(products);
      localStorage.setItem(key, payload);
    }
  }
  addProduct(products: ProductsDataModel[]) {
    this.saveToLocalStorage('products', products);
  }
  getProducts() {
    const response = localStorage.getItem('products');
    return response ? JSON.parse(response) : [];
  }
}
