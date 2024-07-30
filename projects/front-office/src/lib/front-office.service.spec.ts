import { TestBed } from '@angular/core/testing';

import { FrontOfficeService } from './front-office.service';

describe('FrontOfficeService', () => {
  let service: FrontOfficeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontOfficeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
