import { TestBed } from '@angular/core/testing';

import { M3LibService } from './m3-lib.service';

describe('M3LibService', () => {
  let service: M3LibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(M3LibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
