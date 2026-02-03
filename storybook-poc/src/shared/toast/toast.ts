import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
})
export class Toast {
  /* ----- Inputs ----- */
  /**Toast visual variants */
  @Input() variant: 'progress' | 'success' | 'warning' | 'error' = 'progress';
  /**Title for toast */
  @Input() title = '';
  /**Message for toast */
  @Input() message = '';
  /**Sub title for toast */
  @Input() subTitle = '';
  /**Position for the toast */
  @Input() position: | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom' | 'center-top' | 'center-bottom' = 'left-top';
  /* ----- Outputs ----- */
  /**Emit close */
  @Output() close = new EventEmitter<void>();
}
