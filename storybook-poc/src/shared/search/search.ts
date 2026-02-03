import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputField } from '../input-field/input-field';
import { Tooltip } from '../tooltip/tooltip';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule, Tooltip],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search implements OnChanges {
  constructor(private element: ElementRef) { }
  /* ----- Inputs ----- */
  /**Field label text */
  @Input() label = '';
  /**Searchable options list */
  @Input() options: string[] = [];
  /**Disable user interaction */
  @Input() disabled = false;
  /**Make field readonly */
  @Input() readonly = false;
  /**Validation error message */
  @Input() error = '';
  /**Mark field as required */
  @Input() required = false;
  /**Currently selected value */
  @Input() selected: string | null = null;
  /**Placeholder text */
  @Input() placeholder = 'Search & Select';
  /* ----- Internal States ----- */
  /**Dropdown open state */
  isOpen = false;
  /**Focus state */
  focused = false;
  /**Current search input value */
  searchText = '';
  /**Filtered options based on search text */
  get filteredOptions(): string[] {
    return this.options.filter(opt =>
      opt.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  /**Truncate long options */
  truncate(value: string | null, limit = 30): string {
    if (!value) return '';
    return value.length > limit
      ? value.slice(0, limit) + '…'
      : value;
  }
  /**Toggle dropdown visibility */
  toggleDropdown() {
    if (this.disabled || this.readonly) return;
    this.isOpen = !this.isOpen;
    this.focused = this.isOpen;
  }
  /**Select an option */
  select(item: string) {
    this.selected = item;
    this.searchText = item;
    this.isOpen = false;
    this.focused = true;
  }
  /**Clear selection */
  clear() {
    this.searchText = '';
    this.selected = null;
  }
  /**Close dropdown when clicking outside */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.element.nativeElement.contains(event.target);
    if (!clickedInside && this.isOpen) {
      this.isOpen = false;
      this.focused = false;
    }
  }
  /**Sync input changes with search field */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['selected'] && changes['selected'].currentValue) {
      this.searchText = this.selected || '';
    }
  }
}