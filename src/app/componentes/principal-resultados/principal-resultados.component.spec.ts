import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalResultadosComponent } from './principal-resultados.component';

describe('PrincipalResultadosComponent', () => {
  let component: PrincipalResultadosComponent;
  let fixture: ComponentFixture<PrincipalResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
