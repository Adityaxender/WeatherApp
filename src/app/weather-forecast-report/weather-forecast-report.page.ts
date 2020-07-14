import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../services/weather-forecast.service';

@Component({
  selector: 'app-weather-forecast-report',
  templateUrl: './weather-forecast-report.page.html',
  styleUrls: ['./weather-forecast-report.page.scss'],
})
export class WeatherForecastReportPage implements OnInit {
  days: any = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  weatherForecastData: any;
  cityName: string;
  weatherForecastSnapshot: any;
  weatherForecastResponseData: any = [];
  constructor(
      public weather: WeatherForecastService
  ) {}

  ngOnInit() {

  }

  async ionViewDidEnter() {
    try {
        this.weatherForecastSnapshot = history.state.dynamicRouteData.queryParams;
    } catch (e) {
        console.log(e);
    }
    if (this.weatherForecastSnapshot) {
          this.setWeatherForecastData(this.weatherForecastSnapshot.latitude, this.weatherForecastSnapshot.longitude);
      }
  }

  async setWeatherForecastData(lat: string, long: string) {
    try {
        this.weatherForecastResponseData = [];
        this.weatherForecastData = await this.weather.getWeatherForecast(lat, long);
        if (this.weatherForecastData) {
            this.cityName = this.weatherForecastData.city.name;
            for (const data of this.weatherForecastData.list) {
                const d = new Date(data.dt_txt.replace(' ', 'T'));
                const day = this.days[d.getDay()];
                const tm = d.toLocaleTimeString();
                this.weatherForecastResponseData.push({
                    date: day,
                    time: tm,
                    type: data.weather[0].main,
                    description: data.weather[0].description,
                    temp: data.main.temp + '℉',
                    wind: data.wind.speed + ' mph',
                    humidity: data.main.humidity + ' %',
                });
            }
        }
    } catch (error) {

    }
  }
}
