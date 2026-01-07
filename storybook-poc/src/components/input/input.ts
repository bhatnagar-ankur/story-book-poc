import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [CommonModule],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class InputComponent {
  //#region Inputs and Outputs
  /** Label shown above input */
  @Input() label?: string;

  /** Input value */
  @Input() value = '';

  /** Placeholder text */
  @Input() placeholder = '';

  /** Disable input */
  @Input() disabled = false;

  /** Error state */
  @Input() error = false;

  /** Error message */
  @Input() errorMessage = 'This field is required';

  /** Emits value on change */
  @Output() valueChange = new EventEmitter<string>();
  //#endregion

  //#region Methods
  /** Handle input change event */
  public onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
  /** Compute CSS classes based on state */
  public get classes(): string[] {
    return [
      'storybook-input',
      this.error ? 'storybook-input--error' : '',
      this.disabled ? 'storybook-input--readonly' : '',
    ];
  }
  //#endregion
}
