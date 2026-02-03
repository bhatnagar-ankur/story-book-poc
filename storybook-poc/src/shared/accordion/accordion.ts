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
  // Input for title 
  @Input() title!: string;
  // Input for types of variants
  @Input() type: 'primary' | 'secondary' = 'primary';
  //Input for expanded true or false
  @Input() expanded = false;
  hasProjectedContent = false;
  @ContentChild('projected', { read: ElementRef })
  projectedContent!: ElementRef;
  ngAfterContentInit() {
    this.hasProjectedContent = !!this.projectedContent;
  }
  /**
   * Toggle function to expand or collapse accordion
   */
  public toggle(): void {
    this.expanded = !this.expanded;
  }
}
