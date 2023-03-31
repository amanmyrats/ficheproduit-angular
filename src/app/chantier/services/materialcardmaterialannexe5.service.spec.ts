import { TestBed } from '@angular/core/testing';

import { Materialcardmaterialannexe5Service } from './materialcardmaterialannexe5.service';

describe('Materialcardmaterialannexe5Service', () => {
  let service: Materialcardmaterialannexe5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Materialcardmaterialannexe5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
