import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
export type StatusType = 'good' | 'bad' | 'progress' | 'neutral';
export type StyleType = 'style1' | 'style2' | 'style3';
@Component({
  selector: 'app-status-chips',
  imports: [CommonModule],
  templateUrl: './status-chips.html',
  styleUrl: './status-chips.scss',
})
export class StatusChips {
  @Input() mode: 'single' | 'group' = 'group';
  @Input() label = 'Good 1';
  @Input() status: StatusType = 'good';
  @Input() styleType: StyleType = 'style1';
  @Input() activeStatus: StatusType | 'all' = 'all';
  @Input() goodLabelsText = 'Good 1,Good 2,Good 3';
  @Input() badLabelsText = 'Bad 1,Bad 2,Bad 3';
  @Input() progressLabelsText = 'Progress 1,Progress 2,Progress 3';
  @Input() neutralLabelsText = 'Neutral 1,Neutral 2,Neutral 3';
  readonly colorMap = {
    good: ['green1', 'green2', 'green3'],
    bad: ['red1', 'red2', 'red3'],
    progress: ['blue1', 'blue2', 'blue3'],
    neutral: ['gray1', 'gray2', 'gray3'],
  } as const;

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

  private parse(value: string): string[] {
    return value
      .split(',')
      .map(v => v.trim())
      .filter(Boolean);
  }

  getColor(status: StatusType, index: number): string {
    return this.colorMap[status][index % 3];
  }
}
