import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, Platform, AlertController } from '@ionic/angular';

import { SelectCityPage } from './select-city.page';
import { CityInfoService } from '../services/city-info.service';
import { StoreDataService } from '../services/store-data.service';
import { FormsModule } from '@angular/forms';

class MockCityInfoService {
  getCityInfo(data: any) {
    const response = [{
      name: 'Mumbai',
      state: 'Maharashtra',
      lat: '18.975',
      lon: '72.825833'
    }, {
      name: 'Delhi',
      state: 'Delhi',
      lat: '28.666667',
      lon: '77.216667'
    }];
    return new Promise((resolve, reject) => resolve(response));
  }
}
class MockStoreDataService {
  getCityInfo() {
    const response = JSON.stringify([{
      name: 'Mumbai',
      state: 'Maharashtra',
      lat: '18.975',
      lon: '72.825833'
    }]);
    return response;
  }
}


class MockAlertController {
  create() {
  }
}


describe('SelectCityPage', () => {
  let component: SelectCityPage;
  let StoreService: StoreDataService;
  let fixture: ComponentFixture<SelectCityPage>;
  let platformSpy, platformReadySpy;

  beforeEach(async(() => {
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });
    TestBed.configureTestingModule({
      declarations: [ SelectCityPage ],
      imports: [IonicModule.forRoot(),
      FormsModule],
      providers: [
        { provide: CityInfoService, useClass: MockCityInfoService },
        { provide: StoreDataService, useClass: MockStoreDataService },
        { provide: Platform, useValue: platformSpy },
        { provide: AlertController, useClass: MockAlertController }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectCityPage);
    component = fixture.componentInstance;
    StoreService = TestBed.get(StoreDataService);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initializeItems', () => {
    component.ngOnInit();
    component.initializeItems();
  });
  it('should getItems', () => {
    component.ngOnInit();
    const event = {
      target: {
        value: 'abc'
      }
    };
    component.getItems(event);
  });
  it('should getItems else part', () => {
    component.ngOnInit();
    const event = {
      target: {
        value: ''
      }
    };
    component.getItems(event);
  });
  it('should addCity already exists', () => {
    const item = {
      name: 'Mumbai'
    };
    component.addCity(item);
  });
  it('should addCity does not exists', () => {
    const item = {
      name: 'Sample'
    };
    component.addCity(item);
  });
  it('should onCancel', () => {
    const ev = { target : { value : '' }};
    component.onCancel(ev);
  });
  it('should onClear', () => {
    const ev = { target : { value : '' }};
    component.onClear(ev)
  });

});
