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
  ascendingPrice: boolean = true;
  ascendingName: boolean = false;

  getGroceries() {
    this.groceryService.getGroceries(this.filter).subscribe({
      next: (res: Item[]) =>
        (this.groceries = res.sort((a, b) => {
          if (this.ascendingPrice) return a.price - b.price;
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

  toggleAscendingPrice() {
    this.groceries = this.groceries.reverse();
  }

  toggleAscendingName() {
    this.groceries = this.groceries.sort((a, b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) return -1;
      else if (nameA > nameB) return 1;
      else return 0;
    });
  }
}
