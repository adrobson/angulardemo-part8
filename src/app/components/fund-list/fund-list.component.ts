import { Component, OnInit } from '@angular/core';
import { Fund } from 'src/app/data/model';
import { FinancialsService } from 'src/app/services/financials.service';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetFunds } from 'src/app/store/actions/get-funds.actions';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.scss']
})
export class FundListComponent implements OnInit {
  
  @Select(state => state.financials.fundList) fundList$: Observable<Fund[]>;
  @Select(state => state.financials.selectedCountryId) selectedCountryId$: Observable<number>;

  funds:Fund[];

  constructor(private store:Store) {
    this.selectedCountryId$.subscribe(x =>
      {
         this.getData(x);
      });
   }

  ngOnInit(): void {
    this.fundList$.subscribe(x =>
      {
        this.funds = x;
      });  
  }

  getData(countryId:number){
    this.store.dispatch(new GetFunds(countryId));
  }

}
