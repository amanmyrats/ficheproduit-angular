import { TestBed } from '@angular/core/testing';

import { YgtableService } from './ygtable.service';

describe('YgtableService', () => {
  let service: YgtableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YgtableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
