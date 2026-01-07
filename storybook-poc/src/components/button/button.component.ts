import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

//#region Types
/* ----- Button Types ----- */
type ButtonVariant = 'primary' | 'secondary' | 'danger';
/* ----- Button Sizes ----- */
type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      (click)="onClick.emit($event)"
      [ngClass]="classes"
    >
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.css'],
})
export class ButtonComponent {
  //#region Inputs and Outputs
  /* ----- Inputs ----- */
  @Input() disabled = false;
  @Input() primary = false;
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';
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
    ];
  }
  //#endregion
}
