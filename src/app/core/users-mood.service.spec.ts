import { TestBed } from '@angular/core/testing';

import { UsersMoodService } from './users-mood.service';

describe('UsersMoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersMoodService = TestBed.get(UsersMoodService);
    expect(service).toBeTruthy();
  });
});
