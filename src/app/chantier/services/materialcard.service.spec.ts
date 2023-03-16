import { TestBed } from '@angular/core/testing';

import { MaterialcardService } from './materialcard.service';

describe('MaterialcardService', () => {
  let service: MaterialcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
