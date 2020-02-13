import { TestBed } from '@angular/core/testing';

import { NgxFpTsService } from './ngx-fp-ts.service';

describe('NgxFpTsService', () => {
  let service: NgxFpTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFpTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
