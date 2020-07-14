import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { StoreDataService } from '../services/store-data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  CityListData: any;
  constructor(
    public storeDataService: StoreDataService,
    private navController: NavController,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.createCityList();
  }

  async createCityList() {
    try {
      this.CityListData =  JSON.parse(this.storeDataService.getCityInfo());
      if (this.CityListData) {
            this.navController.navigateForward(['tabs/all-cities-list'], {
            state: {
                dynamicRouteData: {
                    queryParams: this.CityListData
                }
            }
        });
      }
    } catch (error) {

    }
  }
  exitApp() {
    if (this.platform.is('desktop') || this.platform.is('mobileweb')) {
      return;
    }
    navigator['app'].exitApp();
  }
}
