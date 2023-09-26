import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() cart: any[] = [];
  
  calculateTotal(): number {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
