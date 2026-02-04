import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartWrapper } from './pie-chart-wrapper';

describe('PieChartWrapper', () => {
  let component: PieChartWrapper;
  let fixture: ComponentFixture<PieChartWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieChartWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartWrapper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
