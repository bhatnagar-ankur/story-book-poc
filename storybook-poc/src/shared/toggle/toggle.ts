import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [],
  templateUrl: './toggle.html',
  styleUrl: './toggle.scss',
})
export class Toggle {
  @Input() checked = false;
  @Input() disabled = false;
  @Input() text = 'Sample text';
  @Input() showText = false;
  @Input() variant: 'default' | 'iconic' = 'default';

  @Output() changed = new EventEmitter<boolean>();

  setValue(value: boolean) {
    if (this.disabled) return;
    this.checked = value;
    this.changed.emit(this.checked);
  }
  onToggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.changed.emit(this.checked);
  }
}
