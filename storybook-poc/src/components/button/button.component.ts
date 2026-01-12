import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

//#region Types
/* ----- Button Types ----- */
type ButtonVariant = 'primary' | 'secondary' | 'danger';
/* ----- Button Sizes ----- */
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonShape = 'rounded' | 'square' | 'pill';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatFormFieldModule,MatInputModule],
  templateUrl: './button.html',
  styleUrls: ['./button.css'],
})
export class ButtonComponent {
  //#region Inputs and Outputs
  /* ----- Inputs ----- */
  @Input() disabled = false;
  @Input() primary = false;
  @Input() shape: ButtonShape = 'rounded';
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() backgroundColor?: string;
  @Input() textColor?: string;
  @Input() borderColor?: string;
  /* ----- Outputs ----- */
  @Output() onClick = new EventEmitter<Event>();
  //#endregion

  //#region Computed Properties
  /* ----- Computed Classes ----- */
  public get classes(): string[] {
    return [
      'storybook-button',
      `storybook-button--${this.variant}`,
      `storybook-button--${this.size}`,
      `storybook-button--${this.shape}`,
      `storybook-button--${this.disabled ? 'disabled' : ''}`,
    ];
  }
  //#endregion
}
