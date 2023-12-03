import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInfoUserComponent } from './payment-info-user.component';

describe('PaymentInfoUserComponent', () => {
  let component: PaymentInfoUserComponent;
  let fixture: ComponentFixture<PaymentInfoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentInfoUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
