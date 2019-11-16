import {  } from './components';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const paymentsRoutes: Routes = [
    {
      path: '',
      redirectTo: 'pricing',
      pathMatch: 'full'
    },
    // {
    //   path: 'list',
    //   component: UsersListComponent
    // }
  ];

@NgModule({
  imports: [RouterModule.forChild(paymentsRoutes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule {}
