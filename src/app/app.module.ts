import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreFrontModule } from './store-front/store-front.module';
import { Route, RouterModule } from '@angular/router';
import { StoreComponent } from './store-front/store/store.component';
import { CartComponent } from './store-front/cart/cart.component';

const appRoutes: Route[] = [
  { path: '', component: StoreComponent },
  { path: 'checkout', component: CartComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreFrontModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
