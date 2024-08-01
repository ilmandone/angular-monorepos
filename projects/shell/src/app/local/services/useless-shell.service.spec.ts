import { TestBed } from '@angular/core/testing';

import { UselessShellService } from './useless-shell.service';

describe('UselessShellService', () => {
  let service: UselessShellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UselessShellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
