import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  imports: [CommonModule],
  templateUrl: './status-badge.html',
  styleUrl: './status-badge.scss',
})
export class StatusBadge {
  /* ----- Inputs ----- */
  /**Badge display variant */
  @Input() variant: 'counter' | 'status' = 'counter';
  /* Counter value*/
  @Input() count = 1;
  /**Badge size */
  @Input() size: 'small' | 'medium' = 'small';
  /**Badge color preset */
  @Input() color: 'blue' | 'green' | 'red' | 'orange' | 'gray' | 'custom' = 'blue';
  /**Custom color value */
  @Input() customColor = '#1f7db8';
  /**Status display type */
  @Input() status: 'warning' | 'success' | 'both' | 'none' = 'both';
}
