import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tooltip } from '../tooltip/tooltip';

@Component({
  selector: 'app-toggle',
  imports: [CommonModule, Tooltip],
  templateUrl: './toggle.html',
  styleUrl: './toggle.scss',
})
export class Toggle {
  @Input() size: 'sm' | 'md' = 'sm';
  @Input() checked: boolean | null = null;
  @Input() disabled = false;
  @Input() showText = false;
  @Input() variant: 'default' | 'iconic' | 'text' = 'default';
  @Input() onText = 'Toggle on';
  @Input() offText = 'Toggle off';
  @Input() leftText = 'Table';
  @Input() rightText = 'Gallery';
  @Output() changed = new EventEmitter<boolean | null>();
  get displayText(): string {
    if (this.checked === true) return this.onText;
    if (this.checked === false) return this.offText;
    return '';
  }

  setValue(value: boolean | null) {
    if (this.disabled) return;
    this.checked = value;
    this.changed.emit(this.checked);
  }
  onToggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.changed.emit(this.checked);
  }

  toggleIconic(value: boolean) {
    if (this.disabled) return;

    if (this.checked === value) {
      this.checked = null;
    } else {
      this.checked = value;
    }

    this.changed.emit(this.checked);
  }
  getTruncatedText(text: string): string {
    if (!text) return '';
    return text.length > 10 ? text.slice(0, 10) + '…' : text;
  }

  isLongText(text: string): boolean {
    return !!text && text.length > 10;
  }


}
