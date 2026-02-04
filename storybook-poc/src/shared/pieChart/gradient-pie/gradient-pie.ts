import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gradient-pie',
  imports: [FormsModule],
  templateUrl: './gradient-pie.html',
  styleUrl: './gradient-pie.scss',
})
export class GradientPie {
  @Input() percentage = 50;
  @Input() size = 180;
}