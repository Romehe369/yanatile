import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HimnodistritalComponent } from './himnodistrital.component';

describe('HimnodistritalComponent', () => {
  let component: HimnodistritalComponent;
  let fixture: ComponentFixture<HimnodistritalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HimnodistritalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HimnodistritalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
