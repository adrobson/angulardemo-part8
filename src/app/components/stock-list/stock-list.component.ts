import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/data/model';
import { FinancialsService } from 'src/app/services/financials.service';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FinancialsState } from 'src/app/store/state/financials.state';
import { GetStocks } from 'src/app/store/actions/get-stocks.actions';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  stocks:Stock[];
  @Select(state => state.financials.selectedCountryId) selectedCountryId$: Observable<number>;
  @Select(state => state.financials.stockList) stockList$: Observable<Stock[]>;


  constructor(private store:Store) {
    this.selectedCountryId$.subscribe(x =>
      {
         this.getData(x);
      });
   }

  ngOnInit(): void {
    this.stockList$.subscribe(x =>
      {
        this.stocks = x;
      });  
  }

  getData(countryId:number){
    this.store.dispatch(new GetStocks(countryId));
  }
}
