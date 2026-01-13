import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {
  @Input() variant: 'promo' | 'product' | 'stats' = 'promo';
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';
  @Input() tag = ''; 
  @Input() price: number = 0;
  @Input() strikePrice: number = 0;
  @Input() colors: string[] = [];          
  @Input() moreOffers: number = 0;
  @Input() offer: string = '';
  @Input() completed: string = '';
  @Input() incomplete: string = '';
}
