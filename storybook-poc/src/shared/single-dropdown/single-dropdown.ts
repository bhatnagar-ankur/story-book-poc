import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputField } from '../input-field/input-field';

@Component({
  selector: 'app-single-dropdown',
  imports: [CommonModule, InputField],
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

  toggleDropdown() {
    if (this.disabled || this.readonly) return;
    this.isOpen = !this.isOpen;
  }

  select(item: string) {
    this.selected = item;
    this.isOpen = false;
  }
}
