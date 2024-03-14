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

  ngOnInit(): void {
    this.loading = true;
    this.groceryService.getGroceries().subscribe({
      next: (res: Item[]) => (this.groceries = res),
      error: (err) => (this.error = err.message),
      complete: () => (this.loading = false),
    });
  }

  addToCart(item: any) {
    this.groceryService.cartItems.push(item);
  }
}
