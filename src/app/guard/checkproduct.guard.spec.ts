import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkproductGuard } from './checkproduct.guard';

describe('checkproductGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkproductGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
