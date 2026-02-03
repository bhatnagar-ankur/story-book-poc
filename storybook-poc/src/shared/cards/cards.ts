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
  /* ----- Inputs ----- */
  /**
   * Card variant types
   * Controls layout and behavior
   */
  @Input() variant: 'promo' | 'product' | 'stats' = 'promo';
  /**
   * Main card title
   */
  @Input() title = '';
  /**
   * Card description
   */
  @Input() description = '';
  /**
   * Image URL
   */
  @Input() image = '';
  /**
   * Tag text
   */
  @Input() tag = '';
  /**
   * Product price
   */
  @Input() price = 0;
  /**
   * Original / strike-through price
   */
  @Input() strikePrice = 0;
  /**
   * Product color images
   * Used for carousel 
   */
  @Input() colors: string[] = [];
  /**
   * Number of additional offers
   */
  @Input() moreOffers = 0;
  /**
   * Offer / discount text
   */
  @Input() offer = '';
  /**
   * Completed stats value
   */
  @Input() completed = '';
  /**
   * Incomplete stats value
   */
  @Input() incomplete = '';
  /**
   * Currently displayed image
   */
  @Input() currentImage = '';
  /**
   * Current image index
   */
  @Input() currentIndex = 0;
  /**
   * Progress bar width(Percentage)
   */
  @Input() progressWidth = 0;
  /* ----- Internal States ----- */
  /**
   * Progress bar CSS class
   */
  progressClass = 'progress-1';
  /**
   * Show hover overlay
   */
  showHover = false;
  /**
   * Toggle color swatches
   */
  showSwatches = false;
  /**
   * Wishlist state
   */
  wishlist = false;
  /* ----- User Interactions ----- */
  /**
   * Toggle wishlist status
   */
  toggleWishlist() {
    this.wishlist = !this.wishlist;
  }
  /**
   * Toggle color swatch panel
   */
  toggleSwatches() {
    this.showSwatches = !this.showSwatches;
  }
  /* ----- Lifecycle hooks ----- */
  /**
   * Initialize component
   * Sets default image for product cards
   */
  ngOnInit() {
    if (this.variant === 'product') {
      this.currentImage = this.image;
      this.updateProgress();
    }
  }
  /**
   * Select image by index
   * @param index 
   */
  selectImage(index: number) {
    this.currentIndex = index;
    this.currentImage = this.colors[index];
    this.updateProgress();
  }
  /**
   * Update progress bar width
   */
  updateProgress() {
    const total = this.colors.length || 1;
    this.progressWidth = ((this.currentIndex + 1) / total) * 100;
  }
  /**
   * Navigate to previous event
   * @param event 
   * @returns 
   */
  prevImage(event: Event) {
    event.stopPropagation();

    if (!this.colors.length) return;

    this.currentIndex =
      this.currentIndex === 0
        ? this.colors.length - 1
        : this.currentIndex - 1;

    this.updateImage();
  }
  /**
   * Navigate to next image
   * @param event 
   * @returns 
   */
  nextImage(event: Event) {
    event.stopPropagation();

    if (!this.colors.length) return;

    this.currentIndex =
      this.currentIndex === this.colors.length - 1
        ? 0
        : this.currentIndex + 1;

    this.updateImage();
  }
  /**
   * Update image and progress
   */
  updateImage() {
    this.currentImage = this.colors[this.currentIndex];
    this.updateProgress();
  }
  /**
   * Truncate long text
   * Adds ellipsis if text exceeds limit
   * @param value 
   * @param limit 
   * @returns 
   */
  truncate(value: string, limit = 26): string {
    return value.length > limit
      ? value.slice(0, limit) + '…'
      : value;
  }
}
