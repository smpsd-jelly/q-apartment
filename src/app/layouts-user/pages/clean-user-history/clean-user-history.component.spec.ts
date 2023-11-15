import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanUserHistoryComponent } from './clean-user-history.component';

describe('CleanUserHistoryComponent', () => {
  let component: CleanUserHistoryComponent;
  let fixture: ComponentFixture<CleanUserHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleanUserHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanUserHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
