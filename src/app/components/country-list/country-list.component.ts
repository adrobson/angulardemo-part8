import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/data/model';
import { FinancialsService } from 'src/app/services/financials.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countrys:Country[];

  constructor(private financialsService:FinancialsService) { }

  ngOnInit(): void {
    this.financialsService.getCountrys().subscribe(x => {
      this.countrys = x.countrys;
    });
 }

}
