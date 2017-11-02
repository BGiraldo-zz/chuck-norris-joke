import { TestBed, inject } from '@angular/core/testing';

import { JokeManagerService } from './joke-manager.service';

describe('JokeManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JokeManagerService]
    });
  });

  it('should be created', inject([JokeManagerService], (service: JokeManagerService) => {
    expect(service).toBeTruthy();
  }));
});
