import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  imports: [CommonModule],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss',
})
export class Tooltip {
  @Input() text = '';
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  @Input() label = 'Tooltip';

  expanded = false;
  isTruncated = false;

  ngAfterViewInit() {
    this.isTruncated = this.text?.length > 120;
  }

  toggle(event: Event) {
    event.stopPropagation();
    this.expanded = !this.expanded;
  }

}
