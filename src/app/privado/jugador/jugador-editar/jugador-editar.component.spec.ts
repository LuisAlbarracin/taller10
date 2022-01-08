import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorEditarComponent } from './jugador-editar.component';

describe('JugadorEditarComponent', () => {
  let component: JugadorEditarComponent;
  let fixture: ComponentFixture<JugadorEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
