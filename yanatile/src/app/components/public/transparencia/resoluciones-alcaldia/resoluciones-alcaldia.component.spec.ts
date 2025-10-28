import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolucionesAlcaldiaComponent } from './resoluciones-alcaldia.component';

describe('ResolucionesAlcaldiaComponent', () => {
  let component: ResolucionesAlcaldiaComponent;
  let fixture: ComponentFixture<ResolucionesAlcaldiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResolucionesAlcaldiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolucionesAlcaldiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
