import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PromoCard } from '../promo-card/promo-card';
import { ProductCard } from '../product-card/product-card';
import { StatsCard } from '../stats-card/stats-card';

@Component({
  selector: 'app-cards-wrapper',
  imports: [CommonModule, PromoCard, ProductCard,StatsCard],
  templateUrl: './cards-wrapper.html',
  styleUrl: './cards-wrapper.scss',
})
export class CardsWrapper {
  @Input() type: 'promo' | 'product' | 'stats' = 'promo';
  @Input() data: any;
}
