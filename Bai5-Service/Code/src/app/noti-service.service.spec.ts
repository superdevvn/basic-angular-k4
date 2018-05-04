import { TestBed, inject } from '@angular/core/testing';

import { NotiServiceService } from './noti-service.service';

describe('NotiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotiServiceService]
    });
  });

  it('should be created', inject([NotiServiceService], (service: NotiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
