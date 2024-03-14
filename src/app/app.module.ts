import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreFrontModule } from './store-front/store-front.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreFrontModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
