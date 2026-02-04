import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularSlider } from './circular-slider';

describe('CircularSlider', () => {
  let component: CircularSlider;
  let fixture: ComponentFixture<CircularSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircularSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircularSlider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
