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
  hoverY = 0;
  panelTop: number = 0;
  onHover(index: number, event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    this.panelTop = rect.top;
    this.hoveredIndex = index;

    this.hoverY = rect.top + rect.height / 2;
  }
  onHoverChildClick(parentIndex: number, childIndex: number) {
    this.expanded = true;
    this.activeIndex = parentIndex;
    this.openIndex = parentIndex;
    this.activeChild = {
      parent: parentIndex,
      index: childIndex,
    };
    this.hoveredIndex = null;
  }

  onParentClick(index: number, hasChildren: boolean) {

    if (this.openIndex === index) {
      this.openIndex = null;
      this.activeChild = null;
      return;
    }

    this.activeIndex = index;

    if (hasChildren) {
      this.openIndex = index;

      this.activeChild = {
        parent: index,
        index: 0
      };
    } else {
      this.openIndex = null;
      this.activeChild = null;
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
