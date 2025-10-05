import { TestBed } from '@angular/core/testing';

import { ClientWrapperService } from './client-wrapper.service';

describe('ClientWrapperService', () => {
  let service: ClientWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
