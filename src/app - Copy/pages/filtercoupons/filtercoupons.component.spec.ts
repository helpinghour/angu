import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltercouponsComponent } from './filtercoupons.component';

describe('FiltercouponsComponent', () => {
  let component: FiltercouponsComponent;
  let fixture: ComponentFixture<FiltercouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltercouponsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltercouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
