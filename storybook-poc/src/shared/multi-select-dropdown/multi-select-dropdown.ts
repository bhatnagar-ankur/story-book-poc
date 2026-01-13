import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Checkbox } from '../checkbox/checkbox';

@Component({
  selector: 'app-multi-select-dropdown',
  imports: [CommonModule, Checkbox],
  templateUrl: './multi-select-dropdown.html',
  styleUrl: './multi-select-dropdown.scss',
})
export class MultiSelectDropdown {
  @Input() label = '';
  @Input() options: string[] = [];
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() error = '';
  @Input() required = true;
  @Input() selected: string[] = [];
  @Input() placeholder = 'Select Items';

  isOpen = false;
  focused = false;

  toggleDropdown() {
    if (this.disabled || this.readonly) return;

    this.isOpen = !this.isOpen;
    this.focused = this.isOpen;
  }

  toggleSelect(item: string) {
    const exists = this.selected.includes(item);
    this.selected = exists
      ? this.selected.filter(i => i !== item)
      : [...this.selected, item];
  }

  removeSelected(item: string) {
    this.selected = this.selected.filter(i => i !== item);
  }

}
