import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, Input, QueryList } from '@angular/core';
import { Checkbox } from '../checkbox/checkbox';
import { MultiSelectDropdown } from '../multi-select-dropdown/multi-select-dropdown';
import { Search } from '../search/search';

@Component({
  selector: 'app-accordion',
  imports: [CommonModule, Checkbox, MultiSelectDropdown, Search],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
})
export class Accordion implements AfterContentInit {
  @Input() title!: string;
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() expanded = false;
  hasProjectedContent = false;
  @ContentChild('projected', { read: ElementRef })
  projectedContent!: ElementRef;
  ngAfterContentInit() {
    this.hasProjectedContent = !!this.projectedContent;
  }
  toggle() {
    this.expanded = !this.expanded;
  }
}
