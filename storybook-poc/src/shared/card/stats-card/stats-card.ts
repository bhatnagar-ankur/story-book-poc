import { Component, Input } from '@angular/core';
import { Buttons } from '../../buttons/buttons';

@Component({
  selector: 'app-stats-card',
  imports: [Buttons],
  templateUrl: './stats-card.html',
  styleUrl: './stats-card.scss',
})
export class StatsCard {
@Input() title = '';
  @Input() image = '';
  @Input() completed = '';
  @Input() incomplete = '';
}
