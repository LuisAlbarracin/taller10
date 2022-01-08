import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorListarComponent } from './jugador-listar.component';

describe('JugadorListarComponent', () => {
  let component: JugadorListarComponent;
  let fixture: ComponentFixture<JugadorListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
