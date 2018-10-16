import { TestBed } from '@angular/core/testing';

import { JsonapiService } from './jsonapi.service';

describe('JsonapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonapiService = TestBed.get(JsonapiService);
    expect(service).toBeTruthy();
  });
});
