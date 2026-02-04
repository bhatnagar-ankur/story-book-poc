import { Component, Input } from '@angular/core';
import { GradientPie } from '../gradient-pie/gradient-pie';
import { MultiRingPie } from '../multi-ring-pie/multi-ring-pie';
import { DonutPie } from '../donut-pie/donut-pie';
import { CircularSlider } from '../circular-slider/circular-slider';
import { TemperaturePie } from '../temperature-pie/temperature-pie';

@Component({
  selector: 'app-pie-chart-wrapper',
  imports: [GradientPie, MultiRingPie, DonutPie, CircularSlider, TemperaturePie],
  templateUrl: './pie-chart-wrapper.html',
  styleUrl: './pie-chart-wrapper.scss',
})
export class PieChartWrapper {
  @Input() variant:
    | 'gradient'
    | 'donut'
    | 'multi-ring'
    | 'slider'
    | 'temperature'
    | 'circular-slider' = 'gradient';

  @Input() size = 200;
  @Input() percentage = 50;
  @Input() segments: any[] = [];
  @Input() rings: any[] = [];
  @Input() minTemp = 10;
  @Input() maxTemp = 30;
  @Input() min = 0;
  @Input() max = 100;
}
