import { Component, inject } from '@angular/core';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css'],
})
export class TotalComponent {
  private groceryService = inject(GroceryService);
  cart = this.groceryService.cartItems;

  calculateTotal(): number {
    let sum = 0;
    this.cart.forEach((x) => (sum += x.price));
    return sum;
  }
}
