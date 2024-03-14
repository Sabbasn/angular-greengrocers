import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { StoreComponent } from './store/store.component';
import { TotalComponent } from './total/total.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreItemComponent } from './store/store-item/store-item.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    CartComponent,
    StoreComponent,
    TotalComponent,
    StoreItemComponent,
    CartItemComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [CartComponent, StoreComponent, TotalComponent],
})
export class StoreFrontModule {}
