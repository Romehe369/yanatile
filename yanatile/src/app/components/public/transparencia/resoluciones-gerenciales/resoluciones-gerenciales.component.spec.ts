import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolucionesGerencialesComponent } from './resoluciones-gerenciales.component';

describe('ResolucionesGerencialesComponent', () => {
  let component: ResolucionesGerencialesComponent;
  let fixture: ComponentFixture<ResolucionesGerencialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResolucionesGerencialesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolucionesGerencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
