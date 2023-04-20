import { TestBed } from '@angular/core/testing';

import { FactureitemService } from './factureitem.service';

describe('FactureitemService', () => {
  let service: FactureitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactureitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
