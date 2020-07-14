import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllCitiesList2Page } from './all-cities-list.page';

describe('AllCitiesList2Page', () => {
  let component: AllCitiesList2Page;
  let fixture: ComponentFixture<AllCitiesList2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCitiesList2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllCitiesList2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
