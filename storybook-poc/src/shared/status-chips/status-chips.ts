import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
/**Supported status types */
export type StatusType = 'good' | 'bad' | 'progress' | 'neutral';
/**Supported status variants */
export type StyleType = 'DotStyle' | 'ButtonStyle' | 'GradientStyle';
@Component({
  selector: 'app-status-chips',
  imports: [CommonModule],
  templateUrl: './status-chips.html',
  styleUrl: './status-chips.scss',
})
export class StatusChips {
  /* ----- Inputs ----- */
  /**Display mode
   * single -> show one chip
   * group -> show multiple chips
   */
  @Input() mode: 'single' | 'group' = 'group';
  /**Default label */
  @Input() label = 'Good 1';
  /**Current status type */
  @Input() status: StatusType = 'good';
  /**Selected chip identifier */
  @Input() selectedChip: string = '';
  /**Visual style type */
  @Input() styleType: StyleType = 'DotStyle';
  /**Active status filter */
  @Input() activeStatus: StatusType | 'all' = 'all';
  /**Comma separated labels */
  @Input() goodLabelsText = 'Good 1,Good 2,Good 3';
  @Input() badLabelsText = 'Bad 1,Bad 2,Bad 3';
  @Input() progressLabelsText = 'Progress 1,Progress 2,Progress 3';
  @Input() neutralLabelsText = 'Neutral 1,Neutral 2,Neutral 3';
  /**Status -> Color class mapping */
  readonly colorMap = {
    good: ['green1', 'green2', 'green3'],
    bad: ['red1', 'red2', 'red3'],
    progress: ['blue1', 'blue2', 'blue3'],
    neutral: ['gray1', 'gray2', 'gray3'],
  } as const;
  /**Parsed labels */
  get goodLabels(): string[] {
    return this.parse(this.goodLabelsText);
  }
  get badLabels(): string[] {
    return this.parse(this.badLabelsText);
  }
  get progressLabels(): string[] {
    return this.parse(this.progressLabelsText);
  }
  get neutralLabels(): string[] {
    return this.parse(this.neutralLabelsText);
  }
  /**Parse comma separated labels */
  private parse(value: string): string[] {
    return value
      .split(',')
      .map(v => v.trim())
      .filter(Boolean);
  }
  /**Get color class for chip */
  getColor(status: StatusType, index: number): string {
    return this.colorMap[status][index % 3];
  }
  /**Determine chip visibility */
  showChip(status: StatusType, index: number): boolean {
    if (!this.selectedChip) return true;
    return this.selectedChip === `${status}-${index}`;
  }
}
