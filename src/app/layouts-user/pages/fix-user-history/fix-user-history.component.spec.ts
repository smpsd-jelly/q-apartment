import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixUserHistoryComponent } from './fix-user-history.component';

describe('FixUserHistoryComponent', () => {
  let component: FixUserHistoryComponent;
  let fixture: ComponentFixture<FixUserHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixUserHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixUserHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
