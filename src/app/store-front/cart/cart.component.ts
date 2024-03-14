import { Component, Input, OnInit, inject } from '@angular/core';
import { Item } from 'src/app/models/item';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  private groceryService = inject(GroceryService);
  cart = this.groceryService.cartItems;

  countAmount(item: Item) {
    return this.cart.filter((x) => x.name === item.name).length;
  }

  unique(cart: Item[]) {
    return cart.filter(
      (value, index, self) => index === self.findIndex((t) => t.id === value.id)
    );
  }
}
