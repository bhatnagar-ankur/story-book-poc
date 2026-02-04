import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circular-slider',
  imports: [FormsModule],
  templateUrl: './circular-slider.html',
  styleUrl: './circular-slider.scss',
})
export class CircularSlider {
  @Input() size = 260;
  @Input() min = 0;
  @Input() max = 100;
  sliderValue = 30;
  isDragging = false;
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
    const centerX = this.size / 2;
    const centerY = this.size / 2;
    const radius = this.sliderRadius;
    return {
      x: centerX + radius * Math.cos(rad),
      y: centerY + radius * Math.sin(rad)
    };
  }
  onCircleDown(e: MouseEvent) {
    this.isDragging = true;
  }
  /**Handle slider drag */
  onCircleMove(e: MouseEvent) {
    if (!this.isDragging) return;
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const cx = rect.left + this.size / 2;
    const centerY = rect.top + this.size / 2;
    const deltaX = e.clientX - cx;
    const deltaY = e.clientY - centerY;
    let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
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
}
