import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
export interface DonutSegment {
  value: number;
  color: string;
}
@Component({
  selector: 'app-donut-pie',
  imports: [FormsModule],
  templateUrl: './donut-pie.html',
  styleUrl: './donut-pie.scss',
})
export class DonutPie {
  /** Chart size */
  @Input() size = 300;
  /** Pie segments */
  @Input() segments: DonutSegment[] = [];
  /**Get total segment value */
  getTotal(): number {
    return this.segments.reduce((a, b) => a + b.value, 0);
  }
  /**Convert value to angle */
  getAngle(value: number): number {
    return (value / this.getTotal()) * 360;
  }
  /**Get start angle for segment */
  getStart(index: number): number {
    let total = 0;
    for (let i = 0; i < index; i++) {
      total += this.getAngle(this.segments[i].value);
    }
    return total;
  }
  /* ================== SVG PATH ================== */
  getArcPath(startAngle: number, angle: number): string {
    const rOuter = this.size / 2;
    const rInner = rOuter - 100;
    const cx = this.size / 2;
    const cy = this.size / 2;
    const toRad = (deg: number) => (deg * Math.PI) / 180;
    const start = toRad(startAngle - 90);
    const end = toRad(startAngle + angle - 90);
    const startX = cx + rOuter * Math.cos(start);
    const startY = cy + rOuter * Math.sin(start);
    const endX = cx + rOuter * Math.cos(end);
    const endY = cy + rOuter * Math.sin(end);
    const innerEndX = cx + rInner * Math.cos(end);
    const innerEndY = cy + rInner * Math.sin(end);
    const innerStartX = cx + rInner * Math.cos(start);
    const innerStartY = cy + rInner * Math.sin(start);
    const largeArc = angle > 180 ? 1 : 0;
    return `
      M ${startX} ${startY}
      A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${endX} ${endY}
      L ${innerEndX} ${innerEndY}
      A ${rInner} ${rInner} 0 ${largeArc} 0 ${innerStartX} ${innerStartY}
      Z
    `;
  }
}