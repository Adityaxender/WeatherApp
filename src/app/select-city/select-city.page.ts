import { Component, OnInit } from '@angular/core';
import { CityInfoService } from '../services/city-info.service';
import { StoreDataService } from '../services/store-data.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.page.html',
  styleUrls: ['./select-city.page.scss'],
})
export class SelectCityPage implements OnInit {
  allCitiesWithCoordinates: any;
  filterCityName: any;
  pushFilterObj: any = [];
  isItemAvailable = false;
  items: any = [];
  checkCityInfoData: any = [];
  selectedCity: string;
  constructor(
    public cityInfo: CityInfoService,
    public storeDataService: StoreDataService,
    public alertController: AlertController
  ) { }

  async ngOnInit() {
    this.allCitiesWithCoordinates = await this.cityInfo.getCityInfo();
  }
  initializeItems() {
    this.items =  this.allCitiesWithCoordinates;
}

getItems(ev: any) {
  try {
    this.initializeItems();
    const val = ev.target.value;
    if (val && val.trim() !== '') {
        this.isItemAvailable = true;
        this.items = this.items.filter((item: any) => {
            return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
    } else {
        this.isItemAvailable = false;
    }
  } catch (error) {

  }
}
  async addCity(item: any) {
    try {
      this.selectedCity = item.name;
      if (JSON.parse(this.storeDataService.getCityInfo())) {
        this.checkCityInfoData = JSON.parse(this.storeDataService.getCityInfo());
        if (this.checkCityInfoData) {
          for (let i = 0; i <  this.checkCityInfoData.length; i++) {
            if (item.name ===  this.checkCityInfoData[i].name) {
              this.presentAlert('Already Added This City.');
              this.isItemAvailable = false;
              this.selectedCity = '';
              return;
            }
          }
          this.checkCityInfoData.push(item);
        } else {
          this.checkCityInfoData.push(item);
        }
      } else {
        this.checkCityInfoData.push(item);
      }

      this.presentAlert('Added City Successfully. You Can See on Forecast Tab.');
      this.isItemAvailable = false;
      this.selectedCity = '';
      this.storeDataService.setCityInfo(this.checkCityInfoData);
    } catch (error) {

    }
  }
  onCancel(ev: any) {
    ev.target.value = '';
  }
  onClear(ev: any) {
    ev.target.value = '';
  }
  async presentAlert(data) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: data,
      buttons: ['OK']
    });

    await alert.present();
  }

}
