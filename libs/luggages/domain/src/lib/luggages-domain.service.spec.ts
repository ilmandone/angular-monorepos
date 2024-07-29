import { TestBed } from '@angular/core/testing';

import { LuggagesDomainService } from './luggages-domain.service';

describe('LuggagesDomainService', () => {
  let service: LuggagesDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuggagesDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
