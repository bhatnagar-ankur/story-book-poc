import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  imports: [CommonModule],
  templateUrl: './bar-chart.html',
  styleUrl: './bar-chart.scss',
})
export class BarChart {
  @Input()
  variant: 'style1' | 'style2' | 'style3' | 'style4' = 'style1';
  @Input() labels: string[] = ['1', '2', '3', '4', '5', '6', '7'];
  @Input() values: number[] = [2, 1, 4, 5, 2, 0, 0];
  @Input() max = 10;
  @Input() title = 'List of countries';
  @Input() stackA: number[] = [30, 45, 25, 40, 50, 15, 35];
  @Input() stackB: number[] = [20, 35, 18, 30, 42, 10, 25];
  @Input() maxStack = 100;
  @Input() showCount = true;
  @Input() items: { label: string; value: number }[] = [
    { label: 'Noruega', value: 95 },
    { label: 'Australia', value: 85 },
    { label: 'Suiza', value: 78 },
    { label: 'Países Bajos', value: 72 },
    { label: 'Estados Unidos', value: 65 },
    { label: 'Alemania', value: 60 },
    { label: 'Nueva Zelanda', value: 55 },
    { label: 'Canadá', value: 50 },
  ];
  getHeight(val: number) {
    return (val / this.max) * 100 + '%';
  }
  getDelta(val: number) {
    return val > 0 ? `+${val} kg` : '';
  }
  getSortedItems() {
    return [...this.items].sort((a, b) => b.value - a.value);
  }
  getRankWidth(val: number) {
    const max = Math.max(...this.items.map(i => i.value));
    return (val / max) * 100 + '%';
  }
  getShade(index: number) {
    const shades = [
      '#020066',
      '#0b2a88',
      '#1355a6',
      '#1f7cbf',
      '#2fa4d3',
      '#50c7e8',
      '#7ddff3',
      '#bfeef9',
    ];
    return shades[index] || '#dbeafe';
  }
  getStackHeight(val: number) {
    return (val / this.maxStack) * 100 + '%';
  }

}
