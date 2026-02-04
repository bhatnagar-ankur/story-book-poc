import { Component, Input } from '@angular/core';
import { CountriesChart } from '../countries-chart/countries-chart';
import { DoubleValueChart } from '../double-value-chart/double-value-chart';
import { SingleValueChart } from '../single-value-chart/single-value-chart';

@Component({
  selector: 'app-bar-chart-wrapper',
  imports: [DoubleValueChart, SingleValueChart, CountriesChart],
  templateUrl: './bar-chart-wrapper.html',
  styleUrl: './bar-chart-wrapper.scss',
})
export class BarChartWrapper {
  //Input for different variants
  @Input() variant: 'singleValue' | 'countries' | 'doubleValue' = 'singleValue';
  //Input for labels present in bar chart
  @Input() labels: string[] = [];
  // Input for values assigned
  @Input() values: number[] = [];
  //Input for maximum number of values that can be assigned
  @Input() max = 10;
  // Input for title of the chart
  @Input() title = '';
  // Input for showing count for number of countries in countries
  @Input() showCount = true;
  // Input for array of label and values for countries
  @Input() items: any[] = [];
  // Input for values in doubleValue
  @Input() stackA: number[] = [];
  // Input for values in doubleValue
  @Input() stackB: number[] = [];
  // Input for maximum values in doubleValue
  @Input() maxStack = 100;
}
