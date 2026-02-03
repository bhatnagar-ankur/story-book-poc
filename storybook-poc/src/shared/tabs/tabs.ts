import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
/* Tab item definition */
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
  /* ----- Inputs ----- */
  /** Tabs configuration list */
  @Input() tabs: TabItem[] = [];
  /** Tabs visual variants*/
  @Input() variant: string = 'style-1';
  /** Toggle icon visibility */
  @Input() showIcon: boolean = true;
  /**Currently active tab index */
  activeIndex = 0;
  /**Select a tab */
  selectTab(index: number) {
    this.activeIndex = index;
  }
}
