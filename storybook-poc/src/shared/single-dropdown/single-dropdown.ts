import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { Tooltip } from '../tooltip/tooltip';

@Component({
  selector: 'app-single-dropdown',
  imports: [CommonModule, Tooltip],
  templateUrl: './single-dropdown.html',
  styleUrl: './single-dropdown.scss',
})
export class SingleDropdown {
  constructor(private element: ElementRef) { }
  /* ----- Inputs ----- */
  /**Field label text */
  @Input() label = '';
  /**Available dropdown options */
  @Input() options: string[] = [];
  /**Disable dropdown interactions */
  @Input() disabled = false;
  /**Make dropdown readonly */
  @Input() readonly = false;
  /**Validation error message */
  @Input() error = '';
  /**Mark field as required */
  @Input() required = false;
  /**Currently selected value */
  @Input() selected: string | null = null;
  /**Placeholder text */
  @Input() placeholder = 'Select Item';
  /* ----- Internal states ----- */
  /**Dropdown open state */
  isOpen = false;
  /**Focus state */
  focused = false;
  /**Truncate long options */
  truncate(value: string | null, limit = 10): string {
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
    this.isOpen = false;
    this.focused = true;
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
}
