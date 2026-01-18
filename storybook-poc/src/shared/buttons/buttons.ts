import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  imports: [CommonModule],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss',
})
export class Buttons {
  /**
   * Label name to display
   */
  @Input() label: string = '';
  /**
   * Selecting the type of button
   */
  @Input() buttonType: 'primary' | 'secondary' | 'text' | 'iconic' | 'long' = 'primary';
  /**
   * Enabling or disabling the button
   */
  @Input() disabled: boolean = false;
  /**
   * Displaying the icon(optional)
   */
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
}
