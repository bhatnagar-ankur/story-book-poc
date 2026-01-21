import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { Checkbox } from '../checkbox/checkbox';

@Component({
  selector: 'app-multi-select-dropdown',
  imports: [CommonModule, Checkbox],
  templateUrl: './multi-select-dropdown.html',
  styleUrl: './multi-select-dropdown.scss',
})
export class MultiSelectDropdown {
  constructor(private element: ElementRef) { }

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
  if (this.mode === 'dropdown') {
    this.isOpen = !this.isOpen;
  }

  if (this.mode === 'search') {
    this.isOpen = true;
  }

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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.element.nativeElement.contains(event.target);

    if (!clickedInside && this.isOpen) {
      this.isOpen = false;
      this.isFocused = false;
    }
  }
}
