import { TestBed } from '@angular/core/testing';

import { JavaService } from './java.service';

describe('JavaService', () => {
  let service: JavaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
