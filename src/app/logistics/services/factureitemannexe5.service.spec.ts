import { TestBed } from '@angular/core/testing';

import { Factureitemannexe5Service } from './factureitemannexe5.service';

describe('Factureitemannexe5Service', () => {
  let service: Factureitemannexe5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Factureitemannexe5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
