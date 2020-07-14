import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/core';
import { WeatherForecastService } from '../services/weather-forecast.service';
import { Location_data, LocationType } from '../interfaces/Weather-Forecast-data';
import { Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-my-location',
  templateUrl: './my-location.page.html',
  styleUrls: ['./my-location.page.scss'],
})
export class MylocationPage implements OnInit {
  locationData: Location_data;
  weatherForecastData: any;
  geoLocation: any;
  cityName:string;
  weatherType:string;
  Temperature:string;
  Humidity:string;
  Wind:string;
  Sunrise:string;
  Sunset:string;
  weatherTime:string;
  hidecurrentLocationData:boolean = false;
  constructor(
      public weather: WeatherForecastService,
      public platform: Platform,
      public alertController: AlertController
  ) {}


  ngOnInit() {}

  ionViewDidEnter() {
    this.getMyLocationWeather();
  }

  async getMyLocationWeather() {
    try {
      const Options = {
        maximumAge: 3000,
        timeout: 5000,
        enableHighAccuracy: true
    }; 
      Geolocation.getCurrentPosition(Options).then((loc : any) =>
       {
         if (loc) {
           this.locationData = {
               type: LocationType.Geolocation,
               value: {
                   longitude: loc.coords.longitude,
                   latitude: loc.coords.latitude
               }
           };
           if (this.locationData) {
               this.currentWeatherReport();
           }
       }
       }).catch((error : any) =>
       {
         this.presentAlert('Your GPS Currently Turn Off Please Turn On GPS.');
         this.hidecurrentLocationData = false;
       });
    } catch (error) {

    }
  }

  async currentWeatherReport() {
    try {
      this.weatherForecastData = await this.weather.getCurrentLocationWeatherForecast(this.locationData);
      if (this.weatherForecastData) {
            this.hidecurrentLocationData = true;
            this.cityName = this.weatherForecastData.name;
            this.weatherType = this.weatherForecastData.weather[0].main;
            this.Temperature = this.weatherForecastData.main.temp + ' ℉';
            this.Humidity = this.weatherForecastData.main.humidity + '%';
            this.Wind = this.weatherForecastData.wind.speed + 'mph';
            this.Sunrise = await this.timeConvertToString(this.weatherForecastData.sys.sunrise);
            this.Sunset = await this.timeConvertToString(this.weatherForecastData.sys.sunset);
            this.weatherTime = await this.timeConvertToString(this.weatherForecastData.dt);
      }
    } catch (error) {
    
    }
  }

  async timeConvertToString(time) {
    try {
      const dt = new Date(time * 1000);
      return dt.toLocaleTimeString();
    } catch (error) {

    }
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
