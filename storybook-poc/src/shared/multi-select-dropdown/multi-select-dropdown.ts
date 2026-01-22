import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Checkbox } from '../checkbox/checkbox';
import { Tooltip } from '../tooltip/tooltip';

@Component({
  selector: 'app-multi-select-dropdown',
  imports: [CommonModule, Checkbox,Tooltip],
  templateUrl: './multi-select-dropdown.html',
  styleUrl: './multi-select-dropdown.scss',
})
export class MultiSelectDropdown implements OnInit, OnChanges {
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
@Output() selectedChange = new EventEmitter<string[]>();
  isOpen = false;
  isFocused = false;
  truncate(value: string, limit = 10): string {
    return value.length > limit
      ? value.slice(0, limit) + '…'
      : value;
  }
  ngOnInit(): void {
    this.filteredOptions = [...this.options];
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
    this.filteredOptions = [...this.options];
  }
toggleSelect(item: string) {
  const updated = this.selected.includes(item)
    ? this.selected.filter(i => i !== item)
    : [...this.selected, item];

  this.selected = updated;
  this.selectedChange.emit(updated);
}

removeSelected(item: string) {
  this.selected = this.selected.filter(i => i !== item);
  this.selectedChange.emit(this.selected);
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
  ngOnChanges(changes: SimpleChanges): void {
  if (changes['options']) {
    this.filteredOptions = [...this.options];
  }

  if (changes['selected']) {
    this.selected = [...this.selected];
  }
}

}
