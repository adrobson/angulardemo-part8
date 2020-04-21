import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { MockAPICountryList } from '../data/model';

 

@Injectable({

  providedIn: 'root'

})

export class FinancialsService {

  countryUrl = `${environment.apiUrl}country.json`;

  constructor(private httpClient:HttpClient) { }

  getCountrys():Observable<MockAPICountryList>{

    return this.httpClient.get<MockAPICountryList>(this.countryUrl);

  }

}