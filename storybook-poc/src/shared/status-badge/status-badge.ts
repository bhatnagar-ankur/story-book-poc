import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  imports: [CommonModule],
  templateUrl: './status-badge.html',
  styleUrl: './status-badge.scss',
})
export class StatusBadge {
  @Input() variant: 'counter' | 'status' = 'counter';

  /* Counter */
  @Input() count = 1;
  @Input() size: 'small' | 'medium' = 'small';
  @Input()
  color: 'blue' | 'green' | 'red' | 'orange' | 'gray' | 'custom' = 'blue';
  @Input() customColor = '#1f7db8';
  @Input()
  status: 'warning' | 'success' | 'both' | 'none' = 'both';
}
