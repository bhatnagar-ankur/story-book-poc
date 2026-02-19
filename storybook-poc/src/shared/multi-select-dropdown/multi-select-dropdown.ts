import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Checkbox } from '../checkbox/checkbox';
import { Tooltip } from '../tooltip/tooltip';

@Component({
  selector: 'app-multi-select-dropdown',
  imports: [CommonModule, Checkbox, Tooltip],
  templateUrl: './multi-select-dropdown.html',
  styleUrl: './multi-select-dropdown.scss',
})
export class MultiSelectDropdown implements OnInit, OnChanges {
  constructor(private element: ElementRef) { }
  /* ----- Inputs -----*/
  /**Field label text */
  @Input() label = '';
  /**Available dropdown options */
  @Input() options: string[] = [];
  /**Disable dropdown interaction */
  @Input() disabled = false;
  /**Make dropdown readonly */
  @Input() readonly = false;
  /**Validation error message */
  @Input() error = '';
  /**Mark field as required */
  @Input() required = true;
  /**Currently selected values */
  @Input() selected: string[] = [];
  /**Placeholder text */
  @Input() placeholder = 'Select Items';
  /**Dropdown icon path */
  @Input() dropdownIcon: string = './assets/icons/dropdown.svg';
  /**Dropdown behavior mode
   * dropdown -> normal
   * search -> searchable
   */
  @Input() mode: 'dropdown' | 'search' = 'dropdown';
  /* ----- Outputs ----- */
  /**Emits when selection changes */
  @Output() selectedChange = new EventEmitter<string[]>();
  /* ----- Internal States ----- */
  /**Dropdown open state */
  isOpen = false;
  /**Focus state */
  isFocused = false;
  /**Filtered options list */
  filteredOptions: string[] = [];
  /* ----- Lifecycle hooks ----- */
  /**Initialize component */
  ngOnInit(): void {
    this.filteredOptions = [...this.options];
  }
  /**Handle input changes */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options']) {
      this.filteredOptions = [...this.options];
    }
    if (changes['selected']) {
      this.selected = [...this.selected];
    }
  }
  /**Handle main field click */
  public handleClick(): void {
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
  /**Toggle item selection */
  toggleSelect(item: string) {
    const updated = this.selected.includes(item)
      ? this.selected.filter(i => i !== item)
      : [...this.selected, item];

    this.selected = updated;
    this.selectedChange.emit(updated);
  }
  /**Remove selected item */
  removeSelected(item: string) {
    this.selected = this.selected.filter(i => i !== item);
    this.selectedChange.emit(this.selected);
  }
  /**Filter options based on input */
  filterOptions(event: Event): void {
    const value = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredOptions = this.options.filter(opt =>
      opt.toLowerCase().includes(value)
    );
  }
  /**Truncate long options */
  truncate(value: string, limit = 10): string {
    return value.length > limit
      ? value.slice(0, limit) + '…'
      : value;
  }
  /**Close dropdown on outside click */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.element.nativeElement.contains(event.target);
    if (!clickedInside && this.isOpen) {
      this.isOpen = false;
      this.isFocused = false;
    }
  }
}