import { TestBed } from '@angular/core/testing';

import { FinancialsService } from './financials.service';

describe('FinancialsService', () => {
  let service: FinancialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
