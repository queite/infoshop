import { Injectable } from '@angular/core';
import { IProductCart } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: IProductCart[] = [];
  total = 0;

  constructor() { }

  getCartItems() {
    this.items = JSON.parse(localStorage.getItem('cart')  || '[]');
    return this.items;
  }

  addToCart(product: IProductCart) {
    console.log(this.items);
    this.items.push(product);
    console.log(this.items);
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.calcTotal();
  }

  clearCart() {
    this.items = [];
    localStorage.clear();
    this.total = 0;
  }

  removeCartItem(productId: number) {
    this.items = this.items.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.calcTotal();
  }

  calcTotal() {
    this.total = this.items.reduce((acc, curr) => acc + curr.price * curr.purchaseQuantity, 0);
  }

  updateCartItem(productId: number, newQuantity: number) {
    const index = this.items.findIndex(item => item.id === productId);
    this.items[index].purchaseQuantity = newQuantity;
    this.calcTotal();
  }
}
