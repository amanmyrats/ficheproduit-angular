import { TestBed } from '@angular/core/testing';

import { FptypeService } from './fptype.service';

describe('FptypeService', () => {
  let service: FptypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FptypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
