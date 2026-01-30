import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './input-field.html',
  styleUrl: './input-field.scss',
})
export class InputField {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() disabled = false;
  @Input() error = '';
  @Input() required = false;
  @Input() readonly = false;
@Input() size: 'sm' | 'md' = 'md';

  isFocused = false;
}
