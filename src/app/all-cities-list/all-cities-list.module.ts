import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllCitiesListPageRoutingModule } from './all-cities-list-routing.module';

import { AllCitiesList2Page } from './all-cities-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllCitiesListPageRoutingModule
  ],
  declarations: [AllCitiesList2Page]
})
export class AllCitiesListPageModule {}
