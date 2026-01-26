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
export class Search implements OnChanges{
constructor(private element: ElementRef) {}

  @Input() label = '';
  @Input() options: string[] = [];
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() error = '';
  @Input() required = false;
  @Input() selected: string | null = null;
  @Input() placeholder = 'Search & Select';

  isOpen = false;
  focused = false;
  searchText = '';

  get filteredOptions(): string[] {
    return this.options.filter(opt =>
      opt.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  truncate(value: string | null, limit = 30): string {
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
    this.searchText = item;
    this.isOpen = false;
    this.focused = true;
  }

  clear() {
    this.searchText = '';
    this.selected = null;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.element.nativeElement.contains(event.target);

    if (!clickedInside && this.isOpen) {
      this.isOpen = false;
      this.focused = false;
    }
  }
  ngOnChanges(changes: SimpleChanges) {
  if (changes['selected'] && changes['selected'].currentValue) {
    this.searchText = this.selected || '';
  }
}

}