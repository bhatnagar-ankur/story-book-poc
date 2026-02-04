import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-double-value-chart',
  imports: [],
  templateUrl: './double-value-chart.html',
  styleUrl: './double-value-chart.scss',
})
export class DoubleValueChart {
  //Input for labels present in bar chart
  @Input() labels: string[] = [];
  // Input for values in doubleValue
  @Input() stackA: number[] = [];
  // Input for values in doubleValue
  @Input() stackB: number[] = [];
  // Input for maximum values in doubleValue
  @Input() maxStack = 100;
  /**
   * Function for height of the doubleValue bar chart
   * @param val 
   */
  getStackHeight(val: number) {
    return (val / this.maxStack) * 100 + '%';
  }
}