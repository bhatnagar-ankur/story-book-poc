import { CommonModule, NgClass } from '@angular/common';
import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  imports: [CommonModule],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss',
})
export class Buttons {
  constructor(private cd: ChangeDetectorRef) { }

  /* Inputs */
  @Input() label: string = '';
  @Input() buttonType:
    | 'primary'
    | 'secondary'
    | 'text'
    | 'iconic'
    | 'long'
    | 'download'
    | 'order' = 'primary';

  @Input() disabled = false;
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() orderSuccessIcon: string = '/assets/icons/tick-icon.svg';
  /* States */
  downloadState: 'idle' | 'border' | 'progress' | 'done' = 'idle';
  orderState: 'idle' | 'progress' | 'done' = 'idle';
  orderProgress = 0;
  isDownloading = false;
  isOrdering = false;

  /* Click Handler */
  onButtonClick() {
    if (this.buttonType === 'download') {
      this.startDownload();
    }

    if (this.buttonType === 'order') {
      this.startOrder();
    }
  }

  /* Generic Animation Runner */
  private runStepAnimation(
    setState: (state: string) => void,
    onReset: () => void
  ) {
    setState('idle');
    this.cd.detectChanges();

    setTimeout(() => {
      setState('border');
      this.cd.detectChanges();

      setTimeout(() => {
        setState('progress');
        this.cd.detectChanges();

        setTimeout(() => {
          setState('done');
          this.cd.detectChanges();

          // Freeze then reset
          setTimeout(() => {
            onReset();
            this.cd.detectChanges();
          }, 1500);

        }, 600);

      }, 900);

    }, 100);
  }

  /* Download */
  private startDownload() {
    if (this.isDownloading) return;

    this.isDownloading = true;

    this.runStepAnimation(
      (state) => (this.downloadState = state as any),
      () => {
        this.isDownloading = false;
      }
    );
  }

  /* Order */
  private startOrder() {
    if (this.isOrdering) return;
    this.isOrdering = true;
    this.orderState = 'progress';
    this.orderProgress = 20;

    const interval = setInterval(() => {
      this.orderProgress += 10;

      if (this.orderProgress >= 100) {
        this.orderProgress = 100;
        clearInterval(interval);

        this.orderState = 'done';
        this.isOrdering = false;
      }

      this.cd.detectChanges();
    }, 300);
  }
}