import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { Accordion } from '../accordion/accordion';
import { InputField } from '../input-field/input-field';
import { StatusChips } from '../status-chips/status-chips';
import { Buttons } from "../buttons/buttons";
import { StatusBadge } from "../status-badge/status-badge";
export interface TableColumn {
  key: string;
  label: string;
}

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
  @Input()
  variant: 'header' | 'accordion' | 'buttons' | 'menu' = 'header';
  @Input() columns: TableColumn[] = [];
  @Input() headerColumns: TableColumn[] = [];
  @Input() rows: TableRow[] = [];
  @Input() showSearch = true;
  @Input() showSort = true;
  @Input() expandableHeader = false;
  @Input() headerExpanded = false;
  @Input()
  headerMode: 'default' | 'search-sort' = 'default';
  toggle(row: TableRow) {
    row.expanded = !row.expanded;
  }
  sortKey: string | null = null;
  sortDir: 'asc' | 'desc' = 'asc';
  onSort(key: string) {
    if (this.sortKey === key) {
      this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortDir = 'asc';
    }
    this.sortRows();
  }
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
  activeFilterKey: string | null = null;
  openFilter(key: string) {
    if (this.activeFilterKey === key) {
      this.activeFilterKey = null;
    } else {
      this.activeFilterKey = key; 
    }
  }
  getRowStatus(value: string): 'good' | 'bad' | 'progress' | 'neutral' {
    if (!value) return 'neutral';
    const v = value.toLowerCase();
    if (v.includes('good')) return 'good';
    if (v.includes('bad')) return 'bad';
    if (v.includes('progress')) return 'progress';
    return 'neutral';
  }
  toggleMenu(row: TableRow, event: Event) {
    event.stopPropagation();
    this.rows.forEach(r => {
      if (r !== row) r.menuOpen = false;
    });
    row.menuOpen = !row.menuOpen;
  }
  onEdit(row: TableRow) {
    console.log('Edit:', row);
    row.menuOpen = false;
  }
  onDelete(row: TableRow) {
    console.log('Delete:', row);
    row.menuOpen = false;
  }
  onTrack(row: TableRow) {
    console.log('Track:', row);
    row.menuOpen = false;
  }
  @HostListener('document:click')
  closeAllMenus() {
    this.rows.forEach(row => {
      row.menuOpen = false;
    });
  }
}
