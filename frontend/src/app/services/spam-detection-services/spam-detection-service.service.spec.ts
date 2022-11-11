import { TestBed } from '@angular/core/testing';

import { SpamDetectionServiceService } from './spam-detection-service.service';

describe('SpamDetectionServiceService', () => {
  let service: SpamDetectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpamDetectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
