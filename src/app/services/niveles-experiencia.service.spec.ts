import { TestBed } from '@angular/core/testing';

import { NivelesExperienciaService } from './niveles-experiencia.service';

describe('NivelesExperienciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NivelesExperienciaService = TestBed.get(NivelesExperienciaService);
    expect(service).toBeTruthy();
  });
});
