import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorPrincipalComponent } from './jugador-principal.component';

describe('JugadorPrincipalComponent', () => {
  let component: JugadorPrincipalComponent;
  let fixture: ComponentFixture<JugadorPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
