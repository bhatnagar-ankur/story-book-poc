import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { Accordion } from '../accordion/accordion';
import { InputField } from '../input-field/input-field';
import { StatusChips } from '../status-chips/status-chips';
import { Buttons } from "../buttons/buttons";
/**Table column definition */
export interface TableColumn {
  key: string;
  label: string;
}
/**Table row data model */
export interface TableRow {
  id: number;
  link: string;
  date: string;
  v1: string;
  v2: string;
  status: string;
  expanded?: boolean;
  showDetails?: boolean;
  menuOpen?: boolean;
}
@Component({
  selector: 'app-table',
  imports: [CommonModule, Accordion, InputField, StatusChips, Buttons],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  /* ----- Inputs ----- */
  /**Table layout variant */
  @Input() variant: 'header' | 'accordion' | 'buttons' | 'menu' = 'header';
  /**Main Table columns */
  @Input() columns: TableColumn[] = [];
  /**Header only column */
  @Input() headerColumns: TableColumn[] = [];
  /**Table data row */
  @Input() rows: TableRow[] = [];
  /**Show search field */
  @Input() showSearch = true;
  /**Show sorting controls */
  @Input() showSort = true;
  /**Enable expandable header */
  @Input() expandableHeader = false;
  /**Header expanded state */
  @Input() headerExpanded = false;
  /**Header display mode */
  @Input() headerMode: 'default' | 'search-sort' = 'default';
  /**Active sort key */
  sortKey: string | null = null;
  /**Sort direction */
  sortDir: 'asc' | 'desc' = 'asc';
  /**Currently active filter key */
  activeFilterKey: string | null = null;
  /**Toggle row expansion */
  toggle(row: TableRow) {
    row.expanded = !row.expanded;
  }
  /**Handle sort click */
  onSort(key: string) {
    if (this.sortKey === key) {
      this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortDir = 'asc';
    }
    this.sortRows();
  }
  /**Sort rows based on active key */
  sortRows() {
    if (!this.sortKey) return;
    const key = this.sortKey;
    this.rows = [...this.rows].sort((a: any, b: any) => {
      const v1 = a[key];
      const v2 = b[key];
      if (v1 < v2) return this.sortDir === 'asc' ? -1 : 1;
      if (v1 > v2) return this.sortDir === 'asc' ? 1 : -1;
      return 0;
    });
  }
  /**Toggle filter dropdown */
  openFilter(key: string) {
    if (this.activeFilterKey === key) {
      this.activeFilterKey = null;
    } else {
      this.activeFilterKey = key;
    }
  }
  /**Map status string to chip type */
  getRowStatus(value: string): 'good' | 'bad' | 'progress' | 'neutral' {
    if (!value) return 'neutral';
    const v = value.toLowerCase();
    if (v.includes('good')) return 'good';
    if (v.includes('bad')) return 'bad';
    if (v.includes('progress')) return 'progress';
    return 'neutral';
  }
  /**Toggle row action menu */
  toggleMenu(row: TableRow, event: Event) {
    event.stopPropagation();
    this.rows.forEach(r => {
      if (r !== row) r.menuOpen = false;
    });
    row.menuOpen = !row.menuOpen;
  }
  /**Edit action */
  onEdit(row: TableRow) {
    console.log('Edit:', row);
    row.menuOpen = false;
  }
  /**Delete action */
  onDelete(row: TableRow) {
    console.log('Delete:', row);
    row.menuOpen = false;
  }
  /**Track action */
  onTrack(row: TableRow) {
    console.log('Track:', row);
    row.menuOpen = false;
  }
  /**close all menus on outside click */
  @HostListener('document:click')
  closeAllMenus() {
    this.rows.forEach(row => {
      row.menuOpen = false;
    });
  }
}