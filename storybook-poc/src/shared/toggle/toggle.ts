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
  /* ----- Inputs ----- */
  /**Toggle size */
  @Input() size: 'sm' | 'md' = 'sm';
  /**Toggle state */
  @Input() checked: boolean | null = null;
  /**Disable interaction */
  @Input() disabled = false;
  /**Show ON/OFF text */
  @Input() showText = false;
  /**Toggle visual variant */
  @Input() variant: 'default' | 'iconic' | 'text' = 'default';
  /**Text when toggle is on */
  @Input() onText = 'Toggle on';
  /**Text when toggle off */
  @Input() offText = 'Toggle off';
  /**Left label */
  @Input() leftText = 'Table';
  /**Right label */
  @Input() rightText = 'Gallery';
  /* ----- Output ----- */
  /**Emit when toggle state changes */
  @Output() changed = new EventEmitter<boolean | null>();
  /**Display text based on state */
  get displayText(): string {
    if (this.checked === true) return this.onText;
    if (this.checked === false) return this.offText;
    return '';
  }
  /**Set toggle value manually */
  setValue(value: boolean | null) {
    if (this.disabled) return;
    this.checked = value;
    this.changed.emit(this.checked);
  }
  /**Toggle between ON/OFF */
  onToggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.changed.emit(this.checked);
  }
  /**Toggle in iconic mode */
  toggleIconic(value: boolean) {
    if (this.disabled) return;
    if (this.checked === value) {
      this.checked = null;
    } else {
      this.checked = value;
    }
    this.changed.emit(this.checked);
  }
  /**Truncate long text */
  getTruncatedText(text: string): string {
    if (!text) return '';
    return text.length > 10 ? text.slice(0, 10) + '…' : text;
  }
  /**Check if text is long */
  isLongText(text: string): boolean {
    return !!text && text.length > 10;
  }
}