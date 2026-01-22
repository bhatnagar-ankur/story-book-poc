import { Component, Input } from '@angular/core';
export interface NavItem {
  icon: string;
  label: string;
  children?: string[];
}
@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  @Input() expanded = false;
  @Input() showIcons = true;
  @Input() showLogo = true;
  @Input() activeIndex: number | null = null;
  @Input() openIndex: number | null = null;
  hoveredIndex: number | null = null;
  activeChild: { parent: number; index: number } | null = null;

  navItems: NavItem[] = [];
  onParentClick(index: number, hasChildren: boolean) {
    if (!this.expanded) {
      this.expanded = true;
      return;
    }
    this.activeIndex = index;
    this.activeChild = null;

    if (hasChildren) {
      this.openIndex = this.openIndex === index ? null : index;
    } else {
      this.openIndex = null;
    }
  }
  toggle() {
    this.expanded = !this.expanded;

    if (!this.expanded) {
      this.activeIndex = null;
      this.openIndex = null;
      this.activeChild = null;
    }
  }

  toggleItem(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
    this.activeChild = null;
  }

  selectChild(parentIndex: number, childIndex: number) {
    this.activeIndex = parentIndex;
    this.activeChild = {
      parent: parentIndex,
      index: childIndex
    };
  }
}
