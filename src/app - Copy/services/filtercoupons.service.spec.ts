import { TestBed } from '@angular/core/testing';

import { FiltercouponsService } from './filtercoupons.service';

describe('FiltercouponsService', () => {
  let service: FiltercouponsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltercouponsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
