import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { GroceryService } from '../../grocery.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input({ required: true }) item!: Item;
  @Input() amount: number = 1;
  private groceryService: GroceryService = inject(GroceryService);
  icon?: string;

  ngOnInit(): void {
    this.icon = `assets/icons/${this.item.id}.svg`;
  }

  remove(item: Item) {
    const index = this.groceryService.cartItems.findIndex(
      (x) => x.id === item.id
    );
    this.groceryService.cartItems.splice(index, 1);
  }

  add(item: Item) {
    this.groceryService.cartItems.push(item);
  }
}
