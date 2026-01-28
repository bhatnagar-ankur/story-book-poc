import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface TabItem {
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-tabs',
  imports: [CommonModule],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
})
export class Tabs {
  @Input() tabs: TabItem[] = [];

  @Input() variant: string = 'style-1';

  @Input() showIcon: boolean = true;

  activeIndex = 0;

  selectTab(index: number) {
    this.activeIndex = index;
  }
}
