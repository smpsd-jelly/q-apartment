import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanUserComponent } from './clean-user.component';

describe('CleanUserComponent', () => {
  let component: CleanUserComponent;
  let fixture: ComponentFixture<CleanUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleanUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
