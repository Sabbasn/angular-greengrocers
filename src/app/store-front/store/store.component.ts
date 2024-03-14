import { Component, OnInit, inject } from '@angular/core';
import { Item } from 'src/app/models/item';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  private groceryService: GroceryService = inject(GroceryService);
  groceries: Item[] = [];
  error?: string;
  loading: boolean = false;

  filter?: string;
  ascending: boolean = true;

  getGroceries() {
    this.groceryService.getGroceries(this.filter).subscribe({
      next: (res: Item[]) =>
        (this.groceries = res.sort((a, b) => {
          if (this.ascending) return a.price - b.price;
          else return b.price - a.price;
        })),
      error: (err) => (this.error = err.message),
      complete: () => (this.loading = false),
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.getGroceries();
  }

  addToCart(item: any) {
    this.groceryService.cartItems.push(item);
  }

  changeFilter() {
    this.filter = this.filter === 'fruit' ? 'vegetable' : 'fruit';
    this.getGroceries();
  }

  toggleAscending() {
    this.groceries = this.groceries.reverse();
  }
}
