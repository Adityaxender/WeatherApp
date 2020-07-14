import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCitiesList2Page } from './all-cities-list.page';

const routes: Routes = [
  {
    path: '',
    component: AllCitiesList2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllCitiesListPageRoutingModule {}
