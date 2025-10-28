import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdosConsejoComponent } from './acuerdos-consejo.component';

describe('AcuerdosConsejoComponent', () => {
  let component: AcuerdosConsejoComponent;
  let fixture: ComponentFixture<AcuerdosConsejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcuerdosConsejoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcuerdosConsejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
