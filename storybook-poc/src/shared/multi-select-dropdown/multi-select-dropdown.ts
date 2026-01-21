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
  filteredOptions: string[] = [];

  @Input() placeholder = 'Select Items';
  @Input() dropdownIcon: string = 'assets/icons/dropdown.svg';
  @Input() mode: 'dropdown' | 'search' = 'dropdown';

  isOpen = false;
  isFocused = false;
  truncate(value: string, limit = 10): string {
    return value.length > limit
      ? value.slice(0, limit) + '…'
      : value;
  }

  handleClick(): void {
    if (this.disabled || this.readonly) return;
    this.isOpen = !this.isOpen;
    this.isFocused = this.isOpen;
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
  filterOptions(event: Event): void {
    const value = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredOptions = this.options.filter(opt =>
      opt.toLowerCase().includes(value)
    );
  }
}
