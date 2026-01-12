import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  imports: [],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss',
})
export class Checkbox {
  /* Enabling or disabling the checkbox */
  @Input() checked = false;
  /* Enabling or disabling partial status */
  @Input() indeterminate = false;
  /* Label for the checkbox (optional) */
  @Input() label?: string;
}
