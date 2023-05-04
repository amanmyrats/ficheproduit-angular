import { TestBed } from '@angular/core/testing';

import { Annexe5Service } from './annexe5.service';

describe('Annexe5Service', () => {
  let service: Annexe5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Annexe5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
