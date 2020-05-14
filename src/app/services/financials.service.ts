import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { MockAPICountryList, Country, Stock, Fund } from '../data/model';

@Injectable({
  providedIn: 'root'
})

export class FinancialsService {

  countryUrl = `${environment.apiUrl}country`;
  stockUrl = environment.apiUrl + "stock?countryId=";
  fundUrl = environment.apiUrl + "fund?countryId=";

  constructor(private httpClient:HttpClient) { }

  getCountrys():Observable<Country[]>{
    return this.httpClient.get<Country[]>(this.countryUrl);
  }

  getStocks(countryId:number):Observable<Stock[]>{
    return this.httpClient.get<Stock[]>(this.stockUrl + countryId);
  }

  getFunds(countryId:number):Observable<Fund[]>{
    return this.httpClient.get<Fund[]>(this.fundUrl + countryId);
  }
}