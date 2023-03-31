import { TestBed } from '@angular/core/testing';

import { MaterialcardmaterialService } from './materialcardmaterial.service';

describe('MaterialcardmaterialService', () => {
  let service: MaterialcardmaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialcardmaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
