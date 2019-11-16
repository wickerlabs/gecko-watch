import {  } from './components';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const homeRoutes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    // {
    //   path: 'list',
    //   component: UsersListComponent
    // }
  ];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
