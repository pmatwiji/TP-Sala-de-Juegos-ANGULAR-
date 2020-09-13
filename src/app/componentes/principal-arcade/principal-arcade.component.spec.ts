import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalArcadeComponent } from './principal-arcade.component';

describe('PrincipalArcadeComponent', () => {
  let component: PrincipalArcadeComponent;
  let fixture: ComponentFixture<PrincipalArcadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalArcadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalArcadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
