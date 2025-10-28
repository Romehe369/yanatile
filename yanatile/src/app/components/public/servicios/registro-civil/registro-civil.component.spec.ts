import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCivilComponent } from './registro-civil.component';

describe('RegistroCivilComponent', () => {
  let component: RegistroCivilComponent;
  let fixture: ComponentFixture<RegistroCivilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroCivilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
