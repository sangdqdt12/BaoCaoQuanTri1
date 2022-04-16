import { TestBed } from '@angular/core/testing';

import { EnviromentHelperService } from './enviroment-helper.service';

describe('EnviromentHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnviromentHelperService = TestBed.get(EnviromentHelperService);
    expect(service).toBeTruthy();
  });
});
