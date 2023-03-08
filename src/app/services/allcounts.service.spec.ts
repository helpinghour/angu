import { TestBed } from '@angular/core/testing';

import { AllcountsService } from './allcounts.service';

describe('AllcountsService', () => {
  let service: AllcountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllcountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
