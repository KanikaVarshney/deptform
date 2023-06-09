import { TestBed } from '@angular/core/testing';

import { ApplicationRequestsService } from './application-requests.service';

describe('ApplicationRequestsService', () => {
  let service: ApplicationRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
