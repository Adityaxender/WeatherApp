import { TestBed } from '@angular/core/testing';

import { WeatherForecastService } from './weather-forecast.service';
import {HttpClientModule} from '@angular/common/http';
describe('WeatherForecastService', () => {
  let service: WeatherForecastService;
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [WeatherForecastService]
    });
    service = TestBed.get(WeatherForecastService);
});

  it('should be created', () => {
    const service: WeatherForecastService = TestBed.get(WeatherForecastService);
    expect(service).toBeTruthy();
  });
});
