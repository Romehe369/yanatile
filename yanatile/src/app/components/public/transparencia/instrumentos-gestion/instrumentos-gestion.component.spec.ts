import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentosGestionComponent } from './instrumentos-gestion.component';

describe('InstrumentosGestionComponent', () => {
  let component: InstrumentosGestionComponent;
  let fixture: ComponentFixture<InstrumentosGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstrumentosGestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrumentosGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
