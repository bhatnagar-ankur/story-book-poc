import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-close-button',
  imports: [CommonModule],
  templateUrl: './close-button.html',
  styleUrl: './close-button.scss',
})
export class CloseButton {
  //#region Inputs and Outputs
  /* ----- Inputs and Outputs ----- */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Output() close = new EventEmitter<void>();
  //#endregion

  //#region Methods
  /** Handle close button click */
  public onClose(): void {
    this.close.emit();
    console.log('Alert closed');
  }
  //#endregion
}
