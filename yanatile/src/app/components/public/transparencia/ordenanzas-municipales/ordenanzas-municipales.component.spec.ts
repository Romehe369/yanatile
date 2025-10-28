import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenanzasMunicipalesComponent } from './ordenanzas-municipales.component';

describe('OrdenanzasMunicipalesComponent', () => {
  let component: OrdenanzasMunicipalesComponent;
  let fixture: ComponentFixture<OrdenanzasMunicipalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenanzasMunicipalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenanzasMunicipalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
