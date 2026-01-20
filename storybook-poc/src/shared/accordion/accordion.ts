import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [CommonModule],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
})
export class Accordion {
  @Input() title!: string;
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() expanded = false;
  @Input() content!: string;

  toggle() {
    this.expanded = !this.expanded;
  }
}
