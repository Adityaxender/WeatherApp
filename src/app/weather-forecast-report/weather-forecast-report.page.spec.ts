import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, Platform, NavController } from '@ionic/angular';

import { WeatherForecastReportPage } from './weather-forecast-report.page';
import { WeatherForecastService } from '../services/weather-forecast.service';
import { NavMock } from 'src/mock/mock';

class MockWeatherForecastService {
  getWeatherForecast(data: any) {
    const response = require('src/mock/data/getWeatherForecast.json');
    return response;
  }
}

describe('WeatherForecastReportPage', () => {
  let component: WeatherForecastReportPage;
  let fixture: ComponentFixture<WeatherForecastReportPage>;
  let platformSpy, platformReadySpy;
  beforeEach(async(() => {
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy, is: true });
    TestBed.configureTestingModule({
      declarations: [ WeatherForecastReportPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: WeatherForecastService, useClass: MockWeatherForecastService },
        { provide: Platform, useValue: platformSpy },
        { provide: NavController, useClass: NavMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherForecastReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call ionviewdidenter', () => {
    window.history.pushState({ dynamicRouteData: { queryParams: 'abc' }}, '', '');
    component.ionViewDidEnter();
  });
  it('should call setWeatherForecastData', () => {
    component.setWeatherForecastData('1', '1');
  });
});
