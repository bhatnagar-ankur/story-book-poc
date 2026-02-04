import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature-pie',
  imports: [FormsModule],
  templateUrl: './temperature-pie.html',
  styleUrl: './temperature-pie.scss',
})
export class TemperaturePie {
  @Input() size = 180;
  @Input() minTemp = 10;
  @Input() maxTemp = 30;
  currentTemp = 16;
  isPowerOn = true;
  segmentsCount = 30;
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
}