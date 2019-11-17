import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { accountComponents } from './components';
import { AccountRoutingModule } from './account-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ...accountComponents
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
