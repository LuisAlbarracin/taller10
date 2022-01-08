import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorAdministrarComponent } from './jugador-administrar.component';

describe('JugadorAdministrarComponent', () => {
  let component: JugadorAdministrarComponent;
  let fixture: ComponentFixture<JugadorAdministrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorAdministrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
