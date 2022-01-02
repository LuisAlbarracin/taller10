import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNoEncontradoComponent } from './error-no-encontrado.component';

describe('ErrorNoEncontradoComponent', () => {
  let component: ErrorNoEncontradoComponent;
  let fixture: ComponentFixture<ErrorNoEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorNoEncontradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
