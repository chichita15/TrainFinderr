import { TestBed } from '@angular/core/testing';

import { ApiPriceService } from './api-price.service';

describe('ApiPriceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiPriceService = TestBed.get(ApiPriceService);
    expect(service).toBeTruthy();
  });
});
