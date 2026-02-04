import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleValueChart } from './double-value-chart';

describe('DoubleValueChart', () => {
  let component: DoubleValueChart;
  let fixture: ComponentFixture<DoubleValueChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoubleValueChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleValueChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
