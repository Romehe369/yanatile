import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConovcatoriaCasComponent } from './conovcatoria-cas.component';

describe('ConovcatoriaCasComponent', () => {
  let component: ConovcatoriaCasComponent;
  let fixture: ComponentFixture<ConovcatoriaCasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConovcatoriaCasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConovcatoriaCasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
