import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/data/model';
import { FinancialsService } from 'src/app/services/financials.service';
import { Store, Select } from '@ngxs/store';
import { GetCountrys } from 'src/app/store/actions/get-countrys.actions';
import { Observable } from 'rxjs';
import { SelectCountry } from 'src/app/store/actions/select-country.actions';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countrys:Country[];
  SelectedCountryId:number;
  @Select(state => state.financials.countryList) countryList$: Observable<Country[]>;

  constructor(private store:Store) {
    this.store.dispatch(new GetCountrys());
  }

  ngOnInit(): void {
    this.countryList$.subscribe(x =>
    {  
      this.countrys = x;  
    });
  }

  onChange(){
    this.store.dispatch(new SelectCountry(this.SelectedCountryId));
  }
}
