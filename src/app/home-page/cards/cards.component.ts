import { Component, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ProductsDataModel } from '../home-page.component';
import { EventEmitter } from '@angular/core';
import { SearchPipe } from '../../search.pipe';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { RenklendirDirective } from '../../renklendir.directive';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, SearchPipe, CurrencyPipe, FormsModule, MatInputModule, MatIcon, RenklendirDirective],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() productsList: ProductsDataModel[] = [];
  @Input() searchText: string = "";
  @Output() addProduct = new EventEmitter<ProductsDataModel>();
  @Output() addFav = new EventEmitter<ProductsDataModel>();
  constructor(private _router: Router) { }
  addToBasket(product: ProductsDataModel) {
    this.addProduct.emit(product);
  }
  addToFav(product: ProductsDataModel) {
    this.addFav.emit(product);
  }
}

