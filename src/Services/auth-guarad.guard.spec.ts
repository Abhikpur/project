import { TestBed } from '@angular/core/testing';

import { AuthGuaradGuard } from './auth-guarad.guard';

describe('AuthGuaradGuard', () => {
  let guard: AuthGuaradGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuaradGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
