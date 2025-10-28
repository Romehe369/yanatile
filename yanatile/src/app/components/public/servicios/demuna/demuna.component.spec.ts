import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemunaComponent } from './demuna.component';

describe('DemunaComponent', () => {
  let component: DemunaComponent;
  let fixture: ComponentFixture<DemunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemunaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
