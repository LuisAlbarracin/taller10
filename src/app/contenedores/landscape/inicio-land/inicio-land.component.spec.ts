import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioLandComponent } from './inicio-land.component';

describe('InicioLandComponent', () => {
  let component: InicioLandComponent;
  let fixture: ComponentFixture<InicioLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioLandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
