import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-countries-chart',
  imports: [],
  templateUrl: './countries-chart.html',
  styleUrl: './countries-chart.scss',
})
export class CountriesChart {
  // Input for title of the chart
  @Input() title = '';
  // Input for showing count for number of countries in countries
  @Input() showCount = true;
  // Input for array of label and values for countries
  @Input() items: { label: string; value: number }[] = [];
  /**
   * Function to get the countries sorted based on the rank
   */
  getSortedItems() {
    return [...this.items].sort((a, b) => b.value - a.value);
  }
  /**
   * Calculating the percentage of the rank based on values
   * @param val 
   */
  getRankWidth(val: number) {
    const max = Math.max(...this.items.map(i => i.value));
    return (val / max) * 100 + '%';
  }

  getShade(index: number) {
    const shades = [
      '#020066', '#0b2a88', '#1355a6',
      '#1f7cbf', '#2fa4d3', '#50c7e8',
      '#7ddff3', '#bfeef9',
    ];
    return shades[index] || '#dbeafe';
  }
}