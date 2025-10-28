import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodisecComponent } from './codisec.component';

describe('CodisecComponent', () => {
  let component: CodisecComponent;
  let fixture: ComponentFixture<CodisecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodisecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodisecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
