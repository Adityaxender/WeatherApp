import { TestBed } from '@angular/core/testing';

import { CityInfoService } from './city-info.service';
import {HttpClientModule} from '@angular/common/http';
  describe('WeatherForecastService', () => {
    let service: CityInfoService;
    beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientModule],
          providers: [CityInfoService]
      });
      service = TestBed.get(CityInfoService);
  });
  it('should be created', () => {
    const service: CityInfoService = TestBed.get(CityInfoService);
    expect(service).toBeTruthy();
  });
});
