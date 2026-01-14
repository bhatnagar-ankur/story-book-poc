import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Buttons } from '../buttons/buttons';

@Component({
  selector: 'app-cards',
  imports: [CommonModule, Buttons],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {
  @Input() variant: 'promo' | 'product' | 'stats' = 'promo';
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';
  @Input() tag = ''; 
  @Input() price = 0;
  @Input() strikePrice = 0;
  @Input() colors: string[] = [];
  @Input() moreOffers = 0;
  @Input() offer = '';
  @Input() completed = '';
  @Input() incomplete = '';

  showHover = false;
  showSwatches = false;
  wishlist = false;

  toggleWishlist() {
    this.wishlist = !this.wishlist;
  }

  toggleSwatches() {
    this.showSwatches = !this.showSwatches;
  }
}
