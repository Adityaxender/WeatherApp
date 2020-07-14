import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, Platform, NavController, IonRouterOutlet } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { TabsPage } from './tabs.page';
import { StoreDataService } from '../services/store-data.service';
import { NavMock } from 'src/mock/mock';

class MockStoreDataService {
  getCityInfo(data: any) {
    const response = {
      name: 'Mumbai',
      state: 'Maharashtra',
      lat: '18.975',
      lon: '72.825833'
    };
    return JSON.stringify(response);
  }
}


describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  let platformSpy, platformReadySpy;

  beforeEach((() => {
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy, is: true });
    TestBed.configureTestingModule({
      declarations: [ TabsPage ],
      imports: [IonicModule.forRoot(),
      RouterTestingModule],
      providers: [
        { provide: StoreDataService, useClass: MockStoreDataService },
        { provide: Platform, useValue: platformSpy },
        { provide: NavController, useClass: NavMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should exit', () => {
    // tslint:disable-next-line: no-string-literal
    window.navigator['__defineGetter__']('platform', () => {
      return 'desktop';
    });
    component.exitApp();
  });
});
