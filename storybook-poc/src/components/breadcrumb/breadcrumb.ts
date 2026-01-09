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
    if (!this.maxItems || this.expanded || arr.length <= this.maxItems) {
      return arr;
    }
    return [arr[0], { label: '…' }, arr[arr.length - 1]];
  }

  /** Expand collapsed crumbs */
  public onExpand(): void {
    this.expanded = true;
    this.expand.emit();
  }
}
