import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
})
export class Toast {
  @Input() variant: 'progress' | 'success' | 'warning' | 'error' = 'progress';
  @Input() title = '';
  @Input() message = '';
  @Input() subTitle = '';
  @Output() close = new EventEmitter<void>();
}
