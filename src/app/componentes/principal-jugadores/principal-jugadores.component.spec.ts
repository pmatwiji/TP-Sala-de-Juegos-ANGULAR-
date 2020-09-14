import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalJugadoresComponent } from './principal-jugadores.component';

describe('PrincipalJugadoresComponent', () => {
  let component: PrincipalJugadoresComponent;
  let fixture: ComponentFixture<PrincipalJugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalJugadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
