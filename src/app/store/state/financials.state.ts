import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { FinancialsService } from 'src/app/services/financials.service';
import { Country, Stock, Fund } from 'src/app/data/model';
import { GetCountrys } from '../actions/get-countrys.actions';
import { SelectCountry } from '../actions/select-country.actions';
import { GetStocks } from '../actions/get-stocks.actions';
import { GetFunds } from '../actions/get-funds.actions';

export interface FinancialsStateModel {
    countryList:Country[];
    selectedCountryId:number;
    stockList:Stock[];
    fundList:Fund[];
}

@State<FinancialsStateModel>({
  name: 'financials',
  defaults: {
    countryList:[],
    selectedCountryId:undefined,
    stockList:[],
    fundList:[]
  }
})
@Injectable()
export class FinancialsState {

    constructor(private financialsService:FinancialsService){
        
    }
    @Action(GetCountrys)
    getCountrys(ctx: StateContext<FinancialsStateModel>){
        const state = ctx.getState();
        let countrys:Country[] = [];
        if(state.countryList.length == 0){
            this.financialsService.getCountrys().subscribe(
                o => {
                    countrys = o;
                    ctx.setState({
                        ...state,
                        countryList:countrys
                    });
                }
            );
        }
    }

    @Action(SelectCountry)
    selectCountry(ctx: StateContext<FinancialsStateModel>, action: SelectCountry){
        const state = ctx.getState();
        ctx.setState({
            ...state,
            selectedCountryId: action.CountryId
        });
   }

   @Action(GetStocks)
    getStocks(ctx: StateContext<FinancialsStateModel>, action: GetStocks){
        const state = ctx.getState();
        let stocks:Stock[] = [];

        this.financialsService.getStocks(action.CountryId).subscribe(
        o => {
            stocks = o;
            ctx.setState({
                ...state,
                stockList:stocks
            });
        });
    }

    @Action(GetFunds)
    getFunds(ctx: StateContext<FinancialsStateModel>, action: GetFunds){
        const state = ctx.getState();
        let funds:Fund[] = [];        
        this.financialsService.getFunds(action.CountryId).subscribe(
            o => {
                funds = o;
                ctx.setState({
                    ...state,
                    fundList:funds
                });
            }
        );
    }

}