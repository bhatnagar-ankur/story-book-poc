import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleValueChart } from './single-value-chart';

describe('SingleValueChart', () => {
  let component: SingleValueChart;
  let fixture: ComponentFixture<SingleValueChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleValueChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleValueChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
