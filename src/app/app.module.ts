import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { FundsHomeComponent } from './components/funds-home/funds-home.component';
import { StocksHomeComponent } from './components/stocks-home/stocks-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    FundsHomeComponent,
    StocksHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
