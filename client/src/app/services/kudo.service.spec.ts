import { TestBed } from '@angular/core/testing';

import { KudoService } from './kudo.service';

describe('KudoService', () => {
  let service: KudoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KudoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
