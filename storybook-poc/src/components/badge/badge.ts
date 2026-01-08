import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

//#region Types
/* ----- Badge Types ----- */
type BadgeColor = 'gray' | 'green' | 'red' | 'orange' | 'purple' | 'teal';
type BadgeAppearance = 'solid' | 'subtle' | 'outline';
type BadgeSize = 'sm' | 'md' | 'lg';
type BadgeShape = 'rounded' | 'pill' | 'square';
type IconPosition = 'start' | 'end';
type AnimationType = 'none' | 'pop' | 'pulse' | 'fade';
//#endregion

//#region Badge Config Interface
/* ----- Badge Config Interface ----- */
export interface BadgeConfig {
  color: string;
  label?: string;
  icon?: string;
  show?: boolean;
}
//#endregion
@Component({
  selector: 'app-badge',
  imports: [CommonModule],
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
})
export class Badge {
  //#region Inputs and Outputs
  /* ----- Inputs and Outputs ----- */
  @Input() color: BadgeColor = 'gray';
  @Input() appearance: BadgeAppearance = 'solid';
  @Input() label?: string;
  @Input() size: BadgeSize = 'md';
  @Input() shape: BadgeShape = 'rounded';
  @Input() icon?: string;
  @Input() iconPosition: IconPosition = 'start';
  @Input() badges?: BadgeConfig[];
  @Input() show = true;
  @Input() isClickable = false;
  @Input() disabled = false;
  @Input() backgroundColor?: string;
  @Input() textColor?: string;
  @Input() borderColor?: string;
  @Input() animation: AnimationType = 'none';
  @Output() onClick = new EventEmitter<void>();
  //#endregion

  //#region Methods
  /** Compute ARIA label for accessibility */
  public get ariaLabel() {
    const parts = [];
    if (this.label) parts.push(this.label);
    return parts.join(' ') || 'badge';
  }

  /** Handle badge click event */
  public handleClick(): void {
    if (this.isClickable && !this.disabled) {
      this.onClick.emit();
    }
  }
  //#endregion
}
