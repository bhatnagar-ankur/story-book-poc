import { Component, Input } from '@angular/core';
export interface MultiRingItem {
  label: string;
  value: number;
  color: string;
}
@Component({
  selector: 'app-multi-ring-pie',
  imports: [],
  templateUrl: './multi-ring-pie.html',
  styleUrl: './multi-ring-pie.scss',
})
export class MultiRingPie {
 /** Chart size */
  @Input() size = 300;

  /** Rings data */
  @Input() rings: MultiRingItem[] = [];

  /** Selected ring */
  selectedIndex: number | null = null;
  getRingRadius(index: number): number {
    const base = this.size / 2 - 30;
    return base - index * 28;
  }

  getRingCircumference(r: number): number {
    return 2 * Math.PI * r;
  }

  getRingOffset(value: number, r: number): number {
    const c = this.getRingCircumference(r);
    return c * (1 - value / 100);
  }

  selectRing(index: number) {
    this.selectedIndex = index;
  }
}