import { TestBed } from '@angular/core/testing';

import { ClientProxyService } from './client-proxy.service';

describe('ClientProxyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientProxyService = TestBed.get(ClientProxyService);
    expect(service).toBeTruthy();
  });
});
