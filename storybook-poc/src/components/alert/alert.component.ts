import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CloseButton } from "../close-button/close-button";

@Component({
  selector: 'app-alert',
  imports: [CommonModule, CloseButton],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class Alert {
  //#region Inputs
  /** Message to display */
  @Input() message = 'This is an alert message';
  /** Optional title for the alert */
  @Input() title?: string;
  /** Type of alert */
  @Input() type: 'success' | 'info' | 'warning' | 'error' = 'info';
  /** Variant of alert */
  @Input() variant: 'default' | 'subtle' | 'warning' | 'error' = 'default';
  //#endregion

  //#region Methods
  /** Get the icon path based on alert type */
  public get iconPath(): string {
    return `/icons/${this.type}.svg`;
  }
  //#endregion
}
