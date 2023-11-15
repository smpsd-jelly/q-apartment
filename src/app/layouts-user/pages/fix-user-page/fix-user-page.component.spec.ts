import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixUserPageComponent } from './fix-user-page.component';

describe('FixUserPageComponent', () => {
  let component: FixUserPageComponent;
  let fixture: ComponentFixture<FixUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixUserPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
