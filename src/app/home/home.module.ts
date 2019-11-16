import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeComponents } from './components';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ...homeComponents
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class HomeModule { }
