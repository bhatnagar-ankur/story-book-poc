import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-dropdown',
  imports: [CommonModule],
  templateUrl: './single-dropdown.html',
  styleUrl: './single-dropdown.scss',
})
export class SingleDropdown {
  @Input() label = '';
  @Input() options: string[] = [];
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() error = '';
  @Input() required = false;
  @Input() selected: string | null = null;
  @Input() placeholder = 'Select Item';

  isOpen = false;
  focused = false;
  truncate(value: string | null, limit = 10): string {
    if (!value) return '';
    return value.length > limit
      ? value.slice(0, limit) + '…'
      : value;
  }

  toggleDropdown() {
    if (this.disabled || this.readonly) return;

    this.isOpen = !this.isOpen;
    this.focused = this.isOpen;
  }

  select(item: string) {
    this.selected = item;
    this.isOpen = false;
    this.focused = true;
  }
}
