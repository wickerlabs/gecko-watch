import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { paymentComponents } from './components';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaymentsRoutingModule } from './payments-routing.module';

@NgModule({
  declarations: [
    ...paymentComponents
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    PaymentsRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class PaymentsModule { }
