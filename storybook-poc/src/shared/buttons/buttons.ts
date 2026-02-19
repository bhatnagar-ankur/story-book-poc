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

  /* ----- Inputs ----- */
  /**
   * Button text label
   */
  @Input() label: string = '';
  /**
   * Button type variants
   * Controls design + behavior
   */
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
  /**
   * Disable button interaction
   */
  @Input() disabled = false;
  /**
   * Icon image path
   */
  @Input() icon?: string;
  /**
   * Icon position relative to label
   */
  @Input() iconPosition: 'left' | 'right' = 'left';
  /**
   * Toggle icon visibility
   */
  @Input() showIcon: boolean = true;
  /**
   * Success icon for order button
   */
  @Input() orderSuccessIcon: string = '/assets/icons/tick-icon.svg';
  /* ----- Internal States(Runtime) ----- */
  /**
   * Download animation states
   */
  downloadState: 'idle' | 'border' | 'progress' | 'done' = 'idle';
  /**
   * Order button states
   */
  orderState: 'idle' | 'progress' | 'done' = 'idle';
  /**
   * Order progress percentage(0-100)
   */
  orderProgress = 0;
  /**
   * Flags to prevent multiple animations
   */
  isDownloading = false;
  isOrdering = false;
  isCartAnimating = false;

  /* ----- Click Handler ----- */
  /**
   * Main button click handler
   * Executes behavior based on button type
   */
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

  /* ---- Generic Animation Handler ----- */
  /**
   * Runs step based animation
   * border -> progress -> done -> reset
   * @param setState 
   * @param onReset 
   */
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

  /* Download button logic */
  private startDownload() {
    // Prevent duplicate runs
    if (this.isDownloading || this.downloadState === 'done') return;
    this.isDownloading = true;
    this.runStepAnimation(
      (state) => (this.downloadState = state as any),
      () => {
        this.isDownloading = false;
      }
    );
  }

  /* Order button logic */
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

  /* Cart button animation */
  private runCartAnimation() {
    if (this.isCartAnimating) return;
    this.isCartAnimating = true;
    const btn = document.querySelector('.button-main-container.cart');
    if (!btn) return;
    btn.classList.add('animate');
    setTimeout(() => {
      btn.classList.remove('animate');
      this.isCartAnimating = false;
    }, 1600);
  }
}