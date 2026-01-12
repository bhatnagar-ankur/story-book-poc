import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss',
})
export class Breadcrumb {
  //#region Inputs
  /* ----- Inputs and Outputs ----- */
  @Input() items: Array<string | { label: string; url?: string; icon?: string }> = [];
  @Input() separator: '/' | '>' | '>>' | 'triangle' | 'none' = '/';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() maxItems: number | null = null;
  @Input() activeLast: boolean = false;
  @Input() truncate: boolean = false;

  @Output() itemClick = new EventEmitter<string>();
  @Output() expand = new EventEmitter<void>();
  //#endregion
  expanded = false;
  /** Normalize string items to objects */
  public get normalizedItems() {
    return this.items.map((item) =>
      typeof item === 'string' ? { label: item } : item
    );
  }

  /** Items visible before expansion */
  public get visibleItems() {
    const arr = this.normalizedItems;

    // If no max or expanded or total <= max, show all
    if (!this.maxItems || this.expanded || arr.length <= this.maxItems) {
      return arr;
    }

    const visible = [];

    // Always take first item
    visible.push(arr[0]);

    // Number of middle items to show minus ends
    const remainingSlots = this.maxItems - 2; 
    // Take next N items from the start
    const middle = arr.slice(1, 1 + remainingSlots);
    visible.push(...middle);
    // Add ellipsis
    visible.push({ label: '…' });
    // Add last item
    visible.push(arr[arr.length - 1]);
    return visible;
  }

  /** Expand collapsed crumbs */
  public onExpand(): void {
    this.expanded = true;
    this.expand.emit();
  }
}
