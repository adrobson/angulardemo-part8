import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksHomeComponent } from './components/stocks-home/stocks-home.component';
import { FundsHomeComponent } from './components/funds-home/funds-home.component';

const routes: Routes = [

  { path: 'stocks', component: StocksHomeComponent },

  { path: 'funds', component: FundsHomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
