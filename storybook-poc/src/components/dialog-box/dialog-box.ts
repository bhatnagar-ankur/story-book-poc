import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './dialog-box.html',
  styleUrl: './dialog-box.scss',
})
export class DialogBox {
  //#region Property
  /* ----- Properties ----- */
  public isOpen = false;
  //#endregion

  //#region Inputs and Outputs
  /* ----- Inputs and Outputs ----- */
  @Input() title = 'Delete Item?';
  @Input() message = 'Are you sure you want to delete this item? This action cannot be undone.';

  @Output() cancel = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();
  //#endregion

  //#region Methods
  /* ----- Open Dialog ----- */
  public openDialog(): void {
    this.isOpen = true;
  }
  /* ----- Close Dialog ----- */
  public closeDialog(): void {
    this.isOpen = false;
  }
  /* ----- Confirm Delete ----- */
  public confirmDelete(): void {
    console.log('Deleted');
    this.closeDialog();
  }
  //#endregion
}
