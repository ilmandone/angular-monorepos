import { TestBed } from '@angular/core/testing';

import { UselessServiceService } from './useless-service.service';

describe('UselessServiceService', () => {
  let service: UselessServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UselessServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
