import { TestBed } from '@angular/core/testing';

import { Inventoryitemannexe5Service } from './inventoryitemannexe5.service';

describe('Inventoryitemannexe5Service', () => {
  let service: Inventoryitemannexe5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Inventoryitemannexe5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
