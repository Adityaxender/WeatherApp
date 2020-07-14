import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AllCitiesList2Page } from './all-cities-list.page';
import { NavController, Platform } from '@ionic/angular';
import { Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreDataService } from '../services/store-data.service';
import { NavMock } from 'src/mock/mock';

  class MockStoreDataService {
    setCityInfo(data: any) {
      localStorage.setItem('cityList', JSON.stringify(data));
    }
    getCityInfo() {
      return localStorage.getItem('cityList');
    }
  }
  
  describe('AllCitiesList2Page', () => {
    let component: AllCitiesList2Page;
    let fixture: ComponentFixture<AllCitiesList2Page>;
    let platformSpy, platformReadySpy;
    beforeEach( (() => {
      platformReadySpy = Promise.resolve();
      platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });
  
      TestBed.configureTestingModule({
        declarations: [ AllCitiesList2Page ],
        imports: [IonicModule.forRoot()],
        providers: [
          { provide: StoreDataService, useClass: MockStoreDataService },
          { provide: Platform, useValue: platformSpy },
          { provide: NavController, useClass: NavMock }
        ]
  
      }).compileComponents();
  
      fixture = TestBed.createComponent(AllCitiesList2Page);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }));
  
    it('Should Create AllCitiesListComponent', () => {
      expect(component).toBeTruthy();
    });
    it('should execute ionviewdidenter with histroy', () => {
      window.history.go(-(history.length - 1));
      component.ionViewDidEnter();
    });
    it('should execute ionviewdidenter without histroy', () => {
      window.history.pushState({ dynamicRouteData: { queryParams: '' }}, '', '');
      component.ionViewDidEnter();
    });
    it('should get weather forecast report', () => {
      const lang = {
        lat: 23.033863,
        lon: 72.585022
      };
      component.getWeatherForecastReport(lang);
    });
  });


