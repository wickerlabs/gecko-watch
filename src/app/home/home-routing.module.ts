import { ApplicationsComponent } from './components';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const homeRoutes: Routes = [
    {
      path: '',
      redirectTo: 'applications',
      pathMatch: 'full'
    },
    {
      path: 'applications',
      component: ApplicationsComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
