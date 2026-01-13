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

  @Output() changed = new EventEmitter<boolean>();

  onToggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.changed.emit(this.checked);
  }
}
