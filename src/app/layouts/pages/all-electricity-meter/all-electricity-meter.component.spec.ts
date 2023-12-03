import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllElectricityMeterComponent } from './all-electricity-meter.component';

describe('AllElectricityMeterComponent', () => {
  let component: AllElectricityMeterComponent;
  let fixture: ComponentFixture<AllElectricityMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllElectricityMeterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllElectricityMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
