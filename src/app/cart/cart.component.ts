import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProductCart } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: IProductCart[] = [];

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.cartService.calcTotal();
  }

  removeCartItem(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.cartService.removeCartItem(productId);
  }

  updateCartItem(productId: number, newQuantity: number) {
    const index = this.cartItems.findIndex(item => item.id === productId);
    this.cartItems[index].purchaseQuantity = newQuantity;
    this.cartService.updateCartItem(productId, newQuantity);
  }
 }
