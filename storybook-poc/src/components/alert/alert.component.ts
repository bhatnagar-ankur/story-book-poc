import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CloseButton } from "../close-button/close-button";

@Component({
  selector: 'app-alert',
  imports: [CommonModule, CloseButton],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  host: {
    '(mouseenter)': 'pauseAutoClose()',
    '(mouseleave)': 'resumeAutoClose()',
    '(document:keydown.escape)': 'handleEsc()'
  }
})
export class Alert {
  //#region Inputs
  /** Message to display */
  @Input() message = 'This is an alert message';
  /** Optional title for the alert */
  @Input() title?: string;
  /** Type of alert */
  @Input() type: 'success' | 'info' | 'warning' | 'error' = 'info';
  /** Show icon in the alert */
  @Input() showIcon = true;
  /** Whether the alert can be closed */
  @Input() isClosable = true;
  /** Auto close the alert after a delay */
  @Input() autoClose = false;
  /** Delay in milliseconds before auto-closing */
  @Input() autoCloseDelay = 4000;
  /** Size of the alert */
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  /** Background color of the alert */
  @Input() backgroundColor?: string;
  /** Text color of the alert */
  @Input() textColor?: string;
  /** Border radius of the alert */
  @Input() rounded: 'none' | 'md' | 'lg' | 'pill' = 'md';
  /** Elevation level of the alert */
  @Input() elevation = 0;
  /** Animation type for alert appearance */
  @Input() animation: 'fade' | 'slide' | 'scale' = 'fade';
  //#endregion

  //#region Outputs
  @Output() onClose = new EventEmitter<void>();
  @Output() onActionClick = new EventEmitter<void>();
  @Output() onTimeout = new EventEmitter<void>();
  @Output() onRender = new EventEmitter<void>();
  //#endregion

  //#region Properties
  private timeout!: any;
  public isVisible = signal(true);
  //#endregion

  //#region Lifecycle Hooks
  /** OnInit Lifecycle Hook */
  public ngOnInit(): void {
    this.onRender.emit();

    if (this.autoClose) {
      this.startTimer();
    }
  }
  //#endregion

  //#region Methods
  /** Get the icon path based on alert type */
  public get iconPath(): string {
    return `assets/icons/${this.type}.svg`;
  }

  /** Start the auto-close timer */
  public startTimer(): void {
    this.timeout = setTimeout(() => {
      this.close(true);
    }, this.autoCloseDelay);
  }

  /** Pause the auto-close timer */
  public pauseAutoClose(): void {
    if (this.timeout) clearTimeout(this.timeout);
  }

  /** Resume the auto-close timer */
  public resumeAutoClose(): void {
    if (this.autoClose) this.startTimer();
  }

  /** Close the alert */
  public close(isTimeout = false): void {
    this.isVisible.set(false);
    this.onClose.emit();
    if (isTimeout) this.onTimeout.emit();
  }

  /** Handle Escape key press to close alert */
  public handleEsc(): void {
    if (this.isClosable) this.close();
  }

  /** Cleanup on component destroy */
  public ngOnDestroy(): void {
    clearTimeout(this.timeout);
  }
}
//#endregion