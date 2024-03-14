import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  private httpClient: HttpClient = inject(HttpClient);
  cartItems: Item[] = [];

  getGroceries(type?: string) {
    type = type ? `?type=${type}` : '';
    return this.httpClient.get<Item[]>(
      'https://boolean-api-server.fly.dev/groceries' + type
    );
  }
}
