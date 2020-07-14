import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(
      private httpClient: HttpClient,
  ) {}

  getCurrentLocationWeatherForecast = async (location: any) => {
      try {
          const serviceUrl = 'https://api.openweathermap.org/data/2.5/weather/?lat=' + location.value.latitude + '&lon=' + location.value.longitude + '&units=imperial&APPID=' + environment.weatherKey;
          const response = await this.httpClient.get(serviceUrl).toPromise();
          return response;
      } catch (error) {
          console.error(error);
      }
  }

  getWeatherForecast = async (latitude: string, longitude: string) => {
      try {
          const url = 'https://api.openweathermap.org/data/2.5/forecast/?lat=' + latitude + '&lon=' + longitude + '&cnt=14';
          const serviceUrl = url + '&units=imperial' + '&APPID=' + environment.weatherKey;
          const response = await this.httpClient.get(serviceUrl).toPromise();
          return response;
      } catch (error) {
          console.error(error);
      }
  }
}
