import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  imports: [],
  templateUrl: './radio-button.html',
  styleUrl: './radio-button.scss',
})
export class RadioButton {
  /**Input for Selected value */
  @Input() selected = false;
  /**Input of label(optional) */
  @Input() label?: string;
}
