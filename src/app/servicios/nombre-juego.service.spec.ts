import { TestBed } from '@angular/core/testing';

import { NombreJuegoService } from './nombre-juego.service';

describe('NombreJuegoService', () => {
  let service: NombreJuegoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NombreJuegoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
