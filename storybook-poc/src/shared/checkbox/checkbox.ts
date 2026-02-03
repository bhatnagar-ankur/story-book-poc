import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  imports: [],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss',
})
export class Checkbox {
  /* ----- Inputs ----- */
  /**
   * Checked state of checkbox
   * true -> checked
   * false -> unchecked
   */
  @Input() checked = false;
  /**
   * Intermediate state
   * Used for partial selections
   */
  @Input() indeterminate = false;
  /**
   * Label text(Optional)
   */
  @Input() label?: string;
  /* ----- Outputs ----- */
  /**
   * Emits when checked state changes
   * @returns boolean
   */
  @Output() checkedChange = new EventEmitter<boolean>();
  /* ------ Event Handlers ------ */
  /**
   * Handles checkbox change event
   * Sync UI state and emits value
   * @param event 
   */
  onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    // Update checked state
    this.checked = input.checked;
    //Reset intermediate state
    this.indeterminate = false;
    //Emit updated value
    this.checkedChange.emit(this.checked);
  }
}
