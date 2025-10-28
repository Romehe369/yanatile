import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadCiudadanaComponent } from './seguridad-ciudadana.component';

describe('SeguridadCiudadanaComponent', () => {
  let component: SeguridadCiudadanaComponent;
  let fixture: ComponentFixture<SeguridadCiudadanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeguridadCiudadanaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguridadCiudadanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
