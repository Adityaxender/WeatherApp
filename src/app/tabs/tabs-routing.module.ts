import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:
      [
        {
          path: 'my-location',
          children:
            [
              {
                path: '',
                loadChildren: '../my-location/my-location.module#MylocationPageModule'
              }
            ]
        },
        {
          path: 'all-cities-list',
          children:
            [
              {
                path: '',
                loadChildren: '../all-cities-list/all-cities-list.module#AllCitiesListPageModule'
              }
            ]
        },
        {
          path: 'select-city',
          children:
            [
              {
                path: '',
                loadChildren: '../select-city/select-city.module#SelectCityPageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: '/tabs/my-location',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/tabs/my-location',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
