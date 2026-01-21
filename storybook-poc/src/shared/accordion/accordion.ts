import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Checkbox } from '../checkbox/checkbox';
import { MultiSelectDropdown } from '../multi-select-dropdown/multi-select-dropdown';

@Component({
  selector: 'app-accordion',
  imports: [CommonModule, Checkbox, MultiSelectDropdown],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
})
export class Accordion {
  @Input() title!: string;
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() expanded = false;
  @Input() content!: string;

  toggle() {
    this.expanded = !this.expanded;
  }
}
