import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartWrapper } from './bar-chart-wrapper';

describe('BarChartWrapper', () => {
  let component: BarChartWrapper;
  let fixture: ComponentFixture<BarChartWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChartWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartWrapper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
