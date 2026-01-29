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
    | 'order' | 'fancy'
    | 'stack-orange'
    | 'stack-pink'
    | 'stack-black'
    | 'cart' = 'primary';

  @Input() disabled = false;
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() showIcon: boolean = true;
  @Input() orderSuccessIcon: string = '/assets/icons/tick-icon.svg';
  /* States */
  downloadState: 'idle' | 'border' | 'progress' | 'done' = 'idle';
  orderState: 'idle' | 'progress' | 'done' = 'idle';
  orderProgress = 0;
  isDownloading = false;
  isOrdering = false;
isCartAnimating = false;

  /* Click Handler */
  onButtonClick() {
    if (this.buttonType === 'cart') {
    this.runCartAnimation();
  }
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
          }, 1000);

        }, 2000);

      }, 400);
    }, 0);
  }

  /* Download */
  private startDownload() {
    if (this.isDownloading || this.downloadState === 'done') return;

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
    if (this.isOrdering || this.orderState === 'done') return;
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
  private runCartAnimation() {

  if (this.isCartAnimating) return;

  this.isCartAnimating = true;

  // Add class
  const btn = document.querySelector('.button-main-container.cart');

  if (!btn) return;

  btn.classList.add('animate');

  // Remove after animation
  setTimeout(() => {
    btn.classList.remove('animate');
    this.isCartAnimating = false;
  }, 1600); // match animation duration
}

}