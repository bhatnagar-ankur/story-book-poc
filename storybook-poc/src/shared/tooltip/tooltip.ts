import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  imports: [CommonModule],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss',
})
export class Tooltip {
  /* ----- Inputs ----- */
  /**Tooltip content text */
  @Input() text = '';
  /**Tooltip position relative to target */
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  /**Accessibility label */
  @Input() label = 'Tooltip';
  /* ----- Internal States ----- */
  /**Expanded state */
  expanded = false;
  /**Indicates if text is truncated */
  isTruncated = false;
  /* ----- Lifestyle hooks ----- */
  /**Detect long text after view init */
  ngAfterViewInit() {
    this.isTruncated = this.text?.length > 120;
  }
  /**Toggle expanded tooltip */
  toggle(event: Event) {
    event.stopPropagation();
    this.expanded = !this.expanded;
  }
}