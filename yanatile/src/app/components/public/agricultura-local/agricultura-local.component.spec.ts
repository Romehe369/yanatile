import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturaLocalComponent } from './agricultura-local.component';

describe('AgriculturaLocalComponent', () => {
  let component: AgriculturaLocalComponent;
  let fixture: ComponentFixture<AgriculturaLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgriculturaLocalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriculturaLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
