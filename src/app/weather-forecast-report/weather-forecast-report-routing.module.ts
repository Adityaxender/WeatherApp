import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherForecastReportPage } from './weather-forecast-report.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherForecastReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherForecastReportPageRoutingModule {}
