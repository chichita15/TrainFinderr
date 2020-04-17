import { TestBed } from '@angular/core/testing';

import { SncfService } from './sncf.service';

describe('SncfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SncfService = TestBed.get(SncfService);
    expect(service).toBeTruthy();
  });
});
