import { TestBed } from '@angular/core/testing';

import { ImportadorService } from './importador.service';

describe('ImportadorService', () => {
  let service: ImportadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
