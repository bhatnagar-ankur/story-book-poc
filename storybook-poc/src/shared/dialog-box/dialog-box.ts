import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Buttons } from '../buttons/buttons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-box',
  imports: [Buttons, CommonModule],
  templateUrl: './dialog-box.html',
  styleUrl: './dialog-box.scss',
})
export class DialogBox {
  /* ----- Inputs ----- */
  /**
   * Dialog visual variant
   * default -> standard dialog
   * error -> error message
   * information -> info message
   * warning -> warning message
   */
  @Input() variant: 'default' | 'error' | 'information' | 'warning' = 'default';
  /**
   * Dialog size
   */
  @Input() size: 'default' | 'medium' | 'large' = 'default';
  /**Dialog title text */
  @Input() title: string = '';
  /**Dialog body message */
  @Input() message: string = '';
  /**Dialog position on screen */
  @Input() position: | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom' | 'center-top' | 'center-bottom' = 'left-top';
  /* ----- Outputs ----- */
  /**Emits when cancel is clicked */
  @Output() cancel = new EventEmitter<void>();
  /**Emits when confirm/ OK is clicked */
  @Output() confirm = new EventEmitter<void>();
  /**
   * Handle cancel action
   */
  public closeCancel(): void {
    this.cancel.emit();
  }
  /**
   * Handle confirm action
   */
  public closeConfirm(): void {
    this.confirm.emit();
  }
}
