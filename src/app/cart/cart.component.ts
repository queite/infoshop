import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProductCart } from '../products';
import { NotificationService } from '../notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: IProductCart[] = [];

  constructor(
    public cartService: CartService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

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

  buy() {
    this.notificationService.notify("Compra realizada");
    this.cartService.clearCart();
    this.router.navigate(['products']);
  }
 }
