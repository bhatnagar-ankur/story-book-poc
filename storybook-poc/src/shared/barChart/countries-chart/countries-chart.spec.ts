import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesChart } from './countries-chart';

describe('CountriesChart', () => {
  let component: CountriesChart;
  let fixture: ComponentFixture<CountriesChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
