import { Component, Input } from '@angular/core';
/**Child navigation item */
export interface NavChild {
  label: string;
  icon?: string;
}
/**Parent navigation item */
export interface NavItem {
  icon: string;
  label: string;
  children?: NavChild[];
}
@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  /* ----- Inputs ----- */
  /**Sidebar expanded or collapsed state */
  @Input() expanded = false;
  /**Show parent icons */
  @Input() showParentIcons = true;
  /**Show child icons */
  @Input() showChildIcons = true;
  /**Show app logo */
  @Input() showLogo = true;
  /**Currently active parent index */
  @Input() activeIndex: number | null = null;
  /**Currently open accordion index */
  @Input() openIndex: number | null = null;
  /**Enable slider mode */
  @Input() useSlider = false;
  /* ----- Internal states ----- */
  /**Currently hovered parent index */
  hoveredIndex: number | null = null;
  /**Active child item reference */
  activeChild: { parent: number; index: number } | null = null;
  /**Navigation item list */
  navItems: NavItem[] = [];
  /**Vertical hover indicator position */
  hoverY = 0;
  /**Hover panel top offset */
  panelTop: number = 0;
  /**Handle parent item hover */
  onHover(index: number, event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    this.panelTop = rect.top;
    this.hoveredIndex = index;
    this.hoverY = rect.top + rect.height / 2;
  }
  /**Handle hover child click */
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
  /**Handle parent item click */
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
  /**Toggle sidebar expand/ collapse */
  toggle() {
    this.expanded = !this.expanded;
    if (!this.expanded) {
      this.activeIndex = null;
      this.openIndex = null;
      this.activeChild = null;
    }
  }
  /**Toggle parent item active state */
  toggleItem(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
    this.activeChild = null;
  }
  /**Select child item */
  selectChild(parentIndex: number, childIndex: number) {
    this.activeIndex = parentIndex;
    this.activeChild = {
      parent: parentIndex,
      index: childIndex
    };
  }
}