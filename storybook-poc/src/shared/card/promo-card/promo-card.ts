import { Component, Input } from '@angular/core';
import { Buttons } from '../../buttons/buttons';

@Component({
  selector: 'app-promo-card',
  imports: [Buttons],
  templateUrl: './promo-card.html',
  styleUrl: './promo-card.scss',
})
export class PromoCard {
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';
}
