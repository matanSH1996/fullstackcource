import { TestBed } from '@angular/core/testing';

import { SiblingComponentServiceService } from './sibling-component-service.service';

describe('SiblingComponentServiceService', () => {
  let service: SiblingComponentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiblingComponentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
