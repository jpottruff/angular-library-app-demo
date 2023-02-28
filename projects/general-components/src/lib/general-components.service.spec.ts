import { TestBed } from '@angular/core/testing';

import { GeneralComponentsService } from './general-components.service';

describe('GeneralComponentsService', () => {
  let service: GeneralComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
