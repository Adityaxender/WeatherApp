import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MylocationPage } from './my-location.page';

const routes: Routes = [
  {
    path: '',
    component: MylocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MylocationPageRoutingModule {}
