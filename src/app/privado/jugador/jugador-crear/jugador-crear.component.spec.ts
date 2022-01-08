import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorCrearComponent } from './jugador-crear.component';

describe('JugadorCrearComponent', () => {
  let component: JugadorCrearComponent;
  let fixture: ComponentFixture<JugadorCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
