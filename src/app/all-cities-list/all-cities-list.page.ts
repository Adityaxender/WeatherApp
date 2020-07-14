import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StoreDataService } from '../services/store-data.service';

@Component({
  selector: 'app-all-cities-list',
  templateUrl: './all-cities-list.page.html',
  styleUrls: ['./all-cities-list.page.scss'],
})
export class AllCitiesList2Page implements OnInit {
  Coordinate: any;
  CityListData: any;
  hideMessage = true;
  constructor(
      private navController: NavController,
      public storeDataService: StoreDataService
  ) {}

   ngOnInit() {

  }
  async ionViewDidEnter() {
    try {
        this.CityListData = history.state.dynamicRouteData.queryParams;
        this.hideMessage = false;
    } catch (e) {
        this.hideMessage = true;
    }
  }

  getWeatherForecastReport(cityInfo: any) {
    try {
        this.Coordinate = {
            latitude: cityInfo.lat,
            longitude: cityInfo.lon
        };
        this.navController.navigateForward(['weather-forecast-report'], {
          state: {
              dynamicRouteData: {
                  queryParams: this.Coordinate
              }
          }
      });
      } catch (error) {

      }
    }
}
