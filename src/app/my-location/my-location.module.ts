import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MylocationPageRoutingModule } from './my-location-routing.module';

import { MylocationPage } from './my-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MylocationPageRoutingModule
  ],
  declarations: [MylocationPage]
})
export class MylocationPageModule {}
