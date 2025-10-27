import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvisionComponent } from './mvision.component';

describe('MvisionComponent', () => {
  let component: MvisionComponent;
  let fixture: ComponentFixture<MvisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MvisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
