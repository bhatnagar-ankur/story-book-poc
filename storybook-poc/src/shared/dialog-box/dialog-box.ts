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
  @Input() variant: 'default' | 'error' | 'information' | 'warning' = 'default';
  @Input() size: 'default' | 'medium' | 'large' = 'default';
  @Input() title: string = '';
  @Input() message: string = '';

  @Output() cancel = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  closeCancel() {
    this.cancel.emit();
  }

  closeConfirm() {
    this.confirm.emit();
  }
}
