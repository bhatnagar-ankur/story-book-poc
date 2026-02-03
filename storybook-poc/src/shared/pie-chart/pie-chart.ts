import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
/**Basic pie segment */
interface Segment {
  value: number;
  color: string;
}
/**Multi ring chart item */
interface Ring {
  label: string;
  value: number;
  color: string;
}
/**Radical slice data */
interface RadialSlice {
  value: number; // 0–100
  color: string;
}

@Component({
  selector: 'app-pie-chart',
  imports: [FormsModule],
  templateUrl: './pie-chart.html',
  styleUrl: './pie-chart.scss',
})
export class PieChart {
  /* ----- Inputs ----- */
  /**Chart size */
  @Input() size = 180;
  /**Pie segments */
  @Input() segments: Segment[] = [];
  /**Main percentage value */
  @Input() percentage = 50;
  /**Chart variant type */
  @Input() variant: 'default' | 'gradient' | 'temperature' | 'multi-ring' | 'circular-temp' | 'circular-slider' | 'segmented-temp' | 'radial-pie' = 'default';
  /**Temperature value(0-100) */
  @Input() temperature = 70;
  /**Rings data(multi ring) */
  @Input() rings: Ring[] = [];
  /**Slider minimum value */
  @Input() min = 0;
  /**Slider maximum value */
  @Input() max = 100;
  /**Number of radical slices */
  @Input() radialSlices = 6;
  /**Colors for radical slicers */
  @Input() radialColors: string[] = [];
  /**Minimum temperature */
  @Input() minTemp = 10;
  /**Maximum temperature */
  @Input() maxTemp = 30;
  /**Radical slice data */
  @Input() radialData: RadialSlice[] = [];
  /**RAdical pie values */
  @Input() radialValues: number[] = [20, 15, 10, 25, 20, 10];
  /* ----- Internal States ----- */
  /**Current temperature */
  currentTemp = 16;
  /**Power status */
  isPowerOn = true;
  /**Number of temp segments */
  segmentsCount = 30;
  /**Slider value */
  sliderValue = 30;
  /**Dragging state */
  isDragging = false;
  /**Selected ring index */
  selectedIndex: number | null = null;
  /**Tooltip state */
  hoveredRing: any = null;
  /**SVG base size */
  readonly BASE = 400;
  /**SVG center */
  readonly CENTER = 200;
  /**Dotted arc angles */
  dotAngles = [0, 60, 120, 180, 240, 300];
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
  /**Generate SVG arc path */
  getArcPath(startAngle: number, angle: number): string {
    const rOuter = this.size / 2;
    const rInner = rOuter - 100;
    const cx = this.size / 2;
    const cy = this.size / 2;
    const toRad = (deg: number) => (deg * Math.PI) / 180;
    const start = toRad(startAngle - 90);
    const end = toRad(startAngle + angle - 90);
    const x1 = cx + rOuter * Math.cos(start);
    const y1 = cy + rOuter * Math.sin(start);
    const x2 = cx + rOuter * Math.cos(end);
    const y2 = cy + rOuter * Math.sin(end);
    const x3 = cx + rInner * Math.cos(end);
    const y3 = cy + rInner * Math.sin(end);
    const x4 = cx + rInner * Math.cos(start);
    const y4 = cy + rInner * Math.sin(start);
    const largeArc = angle > 180 ? 1 : 0;
    return `
    M ${x1} ${y1}
    A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${x2} ${y2}
    L ${x3} ${y3}
    A ${rInner} ${rInner} 0 ${largeArc} 0 ${x4} ${y4}
    Z
  `;
  }
  /**Temperature arc angle */
  get temperatureAngle(): number {
    return (this.temperature / 100) * 180;
  }
  /**Needle rotation angle */
  get needleAngle(): number {
    return (this.temperature / 100) * 180 - 90;
  }
  /**Get temperature arc */
  getTempArc(angle: number): string {
    const cx = this.centerX;
    const cy = this.centerY;
    const r = this.size / 2 - 40;
    const toRad = (d: number) => (d * Math.PI) / 180;
    const start = toRad(-180);
    const end = toRad(angle - 180);
    const x1 = cx + r * Math.cos(start);
    const y1 = cy + r * Math.sin(start);
    const x2 = cx + r * Math.cos(end);
    const y2 = cy + r * Math.sin(end);
    return `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`;
  }
  /**Get dotted temperature arc */
  getTempDottedArc(): string {
    const cx = this.centerX;
    const cy = this.centerY;
    const r = this.size / 2 - 100;
    const toRad = (d: number) => (d * Math.PI) / 180;
    const x1 = cx + r * Math.cos(toRad(-180));
    const y1 = cy + r * Math.sin(toRad(-180));
    const x2 = cx + r * Math.cos(toRad(0));
    const y2 = cy + r * Math.sin(toRad(0));
    return `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`;
  }
  get divider() {
    const angle = (this.temperature / 100) * 180 - 180;
    const r1 = this.size / 2 - 8;
    const r2 = r1 - 66;
    const rad = (angle * Math.PI) / 180;
    const cx = this.centerX;
    const cy = this.centerY;
    return {
      x1: cx + r1 * Math.cos(rad),
      y1: cy + r1 * Math.sin(rad),
      x2: cx + r2 * Math.cos(rad),
      y2: cy + r2 * Math.sin(rad)
    };
  }


  get dividerX() {
    return this.centerX + this.size * 0.20;
  }

  get dividerY() {
    return this.centerY - this.size * 0.43;
  }

  get dividerX2() {
    return this.centerX + this.size * 0.17;
  }

  get dividerY2() {
    return this.centerY - this.size * 0.35;
  }

  get centerX() {
    return this.CENTER;
  }

  get centerY() {
    return this.CENTER + 40;
  }

  get arcLength(): number {
    const r = this.size / 2 - 40;
    return Math.PI * r;
  }
  get dashOffset(): number {

    const progress = this.temperature / 100;

    return this.arcLength * (1 - progress);
  }

  get dotRadius() {
    return this.size * 0.035;
  }
  get pointerLength() {
    return this.size * 0.22;
  }

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
  /**Select Ring */
  selectRing(index: number) {
    this.selectedIndex = index;
  }
  /**Show ring tooltip */
  showTooltip(event: MouseEvent, ring: any) {
    this.hoveredRing = {
      x: event.offsetX,
      y: event.offsetY,
      data: ring
    };
  }
  /**Hide tooltip */
  hideTooltip() {
    this.hoveredRing = null;
  }

  get circularRadius() {
    return this.size / 2 - 30;
  }

  get circularCircumference() {
    return 2 * Math.PI * this.circularRadius;
  }

  get circularLength() {
    return this.circularCircumference * 0.75;
  }

  get circularOffset() {
    const progress = this.temperature / 100;
    return this.circularLength * (1 - progress);
  }

  get circularDot() {
    const angle = (this.temperature / 100) * 270 - 225;

    const rad = (angle * Math.PI) / 180;

    const cx = this.size / 2;
    const cy = this.size / 2;
    const r = this.circularRadius;

    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad)
    };
  }

  get sliderRadius() {
    return this.size / 2 - 26;
  }

  get sliderCircumference() {
    return 2 * Math.PI * this.sliderRadius;
  }

  get sliderProgress() {
    return (this.sliderValue - this.min) / (this.max - this.min);
  }

  get sliderArcLength() {
    return this.sliderCircumference * 0.83;
  }

  get sliderOffset() {
    return this.sliderArcLength * (1 - this.sliderProgress);
  }

  get sliderDot() {

    const progress =
      (this.sliderValue - this.min) / (this.max - this.min);

    const angle = progress * 360 - 90;

    const rad = (angle * Math.PI) / 180;

    const cx = this.size / 2;
    const cy = this.size / 2;
    const r = this.sliderRadius;

    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad)
    };
  }
  /**Start slider drag */
  onCircleDown(e: MouseEvent) {
    this.isDragging = true;
  }
  /**Handle slider drag */
  onCircleMove(e: MouseEvent) {
    if (!this.isDragging) return;
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const cx = rect.left + this.size / 2;
    const cy = rect.top + this.size / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    angle = (angle + 360 + 210) % 360;
    if (angle <= 300) {
      this.sliderValue =
        Math.round(this.min + (angle / 300) * (this.max - this.min));
    }
  }
  /**Stop dragging */
  onCircleUp() {
    this.isDragging = false;
  }

  get activeSegments() {
    const range = this.maxTemp - this.minTemp;
    const value = this.currentTemp - this.minTemp;
    return Math.round((value / range) * this.segmentsCount);
  }

  get segmentArray() {
    return Array(this.segmentsCount).fill(0);
  }
  /**Increase Temperature */
  increaseTemp() {
    if (!this.isPowerOn) return;

    if (this.currentTemp < this.maxTemp) {
      this.currentTemp++;
    }
  }
  /**Decrease Temperature */
  decreaseTemp() {
    if (!this.isPowerOn) return;
    if (this.currentTemp > this.minTemp) {
      this.currentTemp--;
    }
  }
  /**Toggle power */
  togglePower() {
    this.isPowerOn = !this.isPowerOn;
  }
  /**Get radial slice path */
  getRadialValuePath(index: number, percent: number): string {
    return this.getRadialSlicePath(index, percent / 100);
  }
  /**Generate radial slice SVG path */
  private getRadialSlicePath(index: number, scale: number): string {
    const cx = this.size / 2;
    const cy = this.size / 2;
    const maxR = this.size / 2;
    const r = maxR * scale;
    const angle = 360 / this.radialData.length;
    const start = (index * angle - 90) * Math.PI / 180;
    const end = ((index + 1) * angle - 90) * Math.PI / 180;
    const x1 = cx + r * Math.cos(start);
    const y1 = cy + r * Math.sin(start);
    const x2 = cx + r * Math.cos(end);
    const y2 = cy + r * Math.sin(end);
    return `
    M ${cx} ${cy}
    L ${x1} ${y1}
    A ${r} ${r} 0 0 1 ${x2} ${y2}
    Z
  `;
  }
  /**Generate conic gradient */
  getRadialGradient(): string {
    const total = this.radialValues.reduce((a, b) => a + b, 0);
    let current = 0;
    const parts: string[] = [];
    this.radialValues.forEach((value, i) => {
      const start = (current / total) * 360;
      const end = ((current + value) / total) * 360;
      parts.push(
        `${this.radialColors[i] || '#ccc'} ${start}deg ${end}deg`
      );
      current += value;
    });
    return `conic-gradient(${parts.join(', ')})`;
  }
  /**Rotate labels */
  getLabelTransform(angle: number) {
    const center = this.size / 2;
    return `rotate(${angle} ${center} ${center})`;
  }
}
