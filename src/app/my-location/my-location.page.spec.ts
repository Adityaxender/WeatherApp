import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, Platform, NavController, AlertController } from '@ionic/angular';

import { MylocationPage } from './my-location.page';
import { WeatherForecastService } from '../services/weather-forecast.service';
import { NavMock } from 'src/mock/mock';
import { Geolocation } from '@capacitor/core';
import { GeolocationMock } from 'src/mock/geomock';
import { Observable, of } from 'rxjs';

function onSuccess() {
  // do something with the coordinates returned
  return  {
    longitude:  1,
    latitude: 1
  };
}

navigator.geolocation.getCurrentPosition(onSuccess, () => {});

class MockWeatherForecastService {
  getCurrentLocationWeatherForecast(data: any) {
    const response = require('src/mock/data/getCurrentLocationWeatherForecast.json');
    return new Promise((resolve, reject) => resolve(response));
  }
}

class MockAlertController {
  create() {

  }
}


describe('MylocationPage', () => {
  let component: MylocationPage;
  let fixture: ComponentFixture<MylocationPage>;
  let platformSpy, platformReadySpy;

  beforeEach(async(() => {
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });
    TestBed.configureTestingModule({
      declarations: [ MylocationPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: WeatherForecastService, useClass: MockWeatherForecastService },
        { provide: Platform, useValue: platformSpy },
        { provide: NavController, useClass: NavMock },
        { provide: AlertController, useClass: MockAlertController }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MylocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should execute ionviewdidenter', () => {
    component.ionViewDidEnter();
  });
  it('should exectue currentWeatherReport', () => {
    component.currentWeatherReport();
  });
  it('should execute timeConvertToString', () => {
    const time = 1;
    component.timeConvertToString(time);
  });
  it('should execute presentAlert', () => {
    component.presentAlert('abc');
  });
});
