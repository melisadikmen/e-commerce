import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductsDataModel } from '../home-page/home-page.component';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { faHouse, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CurrencyPipe } from '@angular/common';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket-page',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIcon, FontAwesomeModule, CurrencyPipe],
  templateUrl: './basket-page.component.html',
  styleUrl: './basket-page.component.scss'
})
export class BasketPageComponent {
  faCartShopping = faCartShopping;
  faHouse = faHouse;
  itemList: ProductsDataModel[] = [];
  constructor(private _router: Router, private _basketService: BasketService) { }
  ngOnInit() {
    this.itemList = this._basketService.getCart();
  }
  removeFromCart(product: ProductsDataModel) {
    this._basketService.removeFromCart(product.id);
    this.itemList = this.itemList.filter(item => item.id !== product.id);
  }
  goToHomePage() {
    this._router.navigate([""]);
  }
}
