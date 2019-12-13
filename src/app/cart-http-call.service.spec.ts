import { TestBed } from '@angular/core/testing';

import { CartHttpCallService } from './cart-http-call.service';

describe('CartHttpCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartHttpCallService = TestBed.get(CartHttpCallService);
    expect(service).toBeTruthy();
  });
});
