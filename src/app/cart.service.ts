import { Injectable } from '@angular/core';
import { IProductCart } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: IProductCart[] = [];

  constructor() { }

  getCartItems() {
    this.items = JSON.parse(localStorage.getItem('cart')  || '');
    return this.items;
  }

  addToCart(product: IProductCart) {
    console.log(this.items);
    this.items.push(product);
    console.log(this.items);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  clearCart() {
    this.items = [];
    localStorage.clear()
  }
}
