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
  @Input() currentImage = '';
  @Input() currentIndex = 0;
  @Input() progressWidth = 0;
  progressClass = 'progress-1';
  showHover = false;
  showSwatches = false;
  wishlist = false;

  toggleWishlist() {
    this.wishlist = !this.wishlist;
  }

  toggleSwatches() {
    this.showSwatches = !this.showSwatches;
  }
  ngOnInit() {
    if (this.variant === 'product') {
      this.currentImage = this.image;
      this.updateProgress();
    }
  }
  selectImage(index: number) {
    this.currentIndex = index;
    this.currentImage = this.colors[index];
    this.updateProgress();
  }
  updateProgress() {
    const total = this.colors.length || 1;
    this.progressWidth = ((this.currentIndex + 1) / total) * 100;
  }
  prevImage(event: Event) {
    event.stopPropagation();

    if (!this.colors.length) return;

    this.currentIndex =
      this.currentIndex === 0
        ? this.colors.length - 1
        : this.currentIndex - 1;

    this.updateImage();
  }

  nextImage(event: Event) {
    event.stopPropagation();

    if (!this.colors.length) return;

    this.currentIndex =
      this.currentIndex === this.colors.length - 1
        ? 0
        : this.currentIndex + 1;

    this.updateImage();
  }
  updateImage() {
    this.currentImage = this.colors[this.currentIndex];
    this.updateProgress();
  }
  truncate(value: string, limit = 26): string {
    return value.length > limit
      ? value.slice(0, limit) + '…'
      : value;
  }
}
