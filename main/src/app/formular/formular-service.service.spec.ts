import { TestBed } from '@angular/core/testing';

import { FormularServiceService } from './formular-service.service';

describe('FormularServiceService', () => {
  let service: FormularServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
