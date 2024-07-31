import { TestBed } from '@angular/core/testing';

import { TicketsDomainService } from './tickets-domain.service';

describe('TicketsDomainService', () => {
  let service: TicketsDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketsDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
