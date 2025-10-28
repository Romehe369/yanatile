import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosPobladosComponent } from './centros-poblados.component';

describe('CentrosPobladosComponent', () => {
  let component: CentrosPobladosComponent;
  let fixture: ComponentFixture<CentrosPobladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentrosPobladosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentrosPobladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
