import { Component, OnInit } from '@angular/core';
import { Fund } from 'src/app/data/model';
import { FinancialsService } from 'src/app/services/financials.service';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.scss']
})
export class FundListComponent implements OnInit {

  funds:Fund[];

  constructor(private financialsService:FinancialsService) {
    financialsService.selectedCountry.subscribe(x => {
      this.getData(x);
    });
   }

  ngOnInit(): void {
  }

  getData(countryId:number){
    this.financialsService.getFunds(countryId).subscribe(x => this.funds = x);
  }

}
