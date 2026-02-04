import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-value-chart',
  imports: [],
  templateUrl: './single-value-chart.html',
  styleUrl: './single-value-chart.scss',
})
export class SingleValueChart {
  //Input for labels present in bar chart
  @Input() labels: string[] = [];
  // Input for values assigned
  @Input() values: number[] = [];
  //Input for maximum number of values that can be assigned
  @Input() max = 10;
  /**
   * Function to get the height of singleValue bar chart
   * @param val 
   */
  getHeight(val: number) {
    return (val / this.max) * 100 + '%';
  }
  /**
   * Function to get the current track value
   * @param val 
   */
  getDelta(val: number) {
    return val > 0 ? `+${val} kg` : '';
  }
}