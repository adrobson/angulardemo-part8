import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { FundsHomeComponent } from './components/funds-home/funds-home.component';
import { StocksHomeComponent } from './components/stocks-home/stocks-home.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { FundListComponent } from './components/fund-list/fund-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    FundsHomeComponent,
    StocksHomeComponent,
    CountryListComponent,
    StockListComponent,
    FundListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
