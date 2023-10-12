import { TestBed } from '@angular/core/testing';

import { CollectionsManagerService } from './collections-manager.service';

describe('CollectionsManagerService', () => {
  let service: CollectionsManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionsManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
