import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard implements OnInit {
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';
  @Input() tag = '';
  @Input() price = 0;
  @Input() strikePrice = 0;
  @Input() offer = '';
  @Input() colors: string[] = [];
  @Input() moreOffers = 0;
  /**
   * Toggle color swatches
   */
  showSwatches = false;
  /**
   * Wishlist state
   */
  wishlist = false;
  currentIndex = 0;
  currentImage = '';
  progressWidth = 0;
  showHover: boolean = false;

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
    this.currentImage = this.image;
    this.updateProgress();
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