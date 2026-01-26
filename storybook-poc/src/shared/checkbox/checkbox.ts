import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  imports: [],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss',
})
export class Checkbox {
  @Input() checked = false;
  @Input() indeterminate = false;
  @Input() label?: string;
  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;
    this.indeterminate = false;
    this.checkedChange.emit(this.checked);
  }
}
