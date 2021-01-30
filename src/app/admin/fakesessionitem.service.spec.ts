import { TestBed } from '@angular/core/testing';

import { FakeSessionItemService } from './fakesessionitem.service';

describe('FakesessionitemService', () => {
  let service: FakeSessionItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeSessionItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
