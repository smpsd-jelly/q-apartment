import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityMeterComponent } from './electricity-meter.component';

describe('ElectricityMeterComponent', () => {
  let component: ElectricityMeterComponent;
  let fixture: ComponentFixture<ElectricityMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricityMeterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricityMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
