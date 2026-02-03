import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './input-field.html',
  styleUrl: './input-field.scss',
})
export class InputField {
  /* ----- Inputs ----- */
  /**Input field label text */
  @Input() label = '';
  /**Placeholder text */
  @Input() placeholder = '';
  /**Current Input value */
  @Input() value = '';
  /**Disable input interaction */
  @Input() disabled = false;
  /**
   * Error message text
   * Displayed when validation fails
   */
  @Input() error = '';
  /**Mark field as required */
  @Input() required = false;
  /**Makes input readOnly */
  @Input() readonly = false;
  /**
   * Input field size
   * sm -> small
   * md -> medium
   */
  @Input() size: 'sm' | 'md' = 'md';
  /* ----- Internal state ----- */
  /**
   * Tracks focused state
   */
  isFocused = false;
}