import { CommonModule, DatePipe } from '@angular/common';
import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
/* ------ Interfaces ------ */
/**
 * Represents single calendar day
 */
interface Day {
  date: Date;
  currentMonth: boolean;
  selected?: boolean;
  inRange?: boolean;
  rangeStart?: boolean;
  rangeEnd?: boolean;
}
/**
 * Represents year item in picker
 */
interface YearItem {
  value: number;
  disabled: boolean;
}

@Component({
  selector: 'app-date-picker',
  imports: [CommonModule, DatePipe, FormsModule],
  templateUrl: './date-picker.html',
  styleUrl: './date-picker.scss',
})
export class DatePicker implements OnInit, OnChanges {
  /* ----- Inputs ----- */
  /**
   * Picker mode
   * single -> single date
   * range -> date range
   */
  @Input() type: 'single' | 'range' = 'single';
  /**
   * Calendar icon optional
   */
  @Input() icon?: string;
  /**
   * Disable past years
   */
  @Input() noPastYears = false;
  /**
   * Disable future years
   */
  @Input() noFutureYears = false;
  /**
   * Limit number of past years
   */
  @Input() pastYearLimit: number | null = null;
  /**
   * Limit number of future years
   */
  @Input() futureYearLimit: number | null = null;
  /* Internal states */
  /** Show date picker popup */
  show = false;
  /**Show year selector */
  showYearPicker = false;
  /**Current visible month */
  currentMonth = new Date();
  /**Temporary selected year */
  tempYear!: number;
  /**Calendar grid days */
  days: Day[] = [];
  /**Available years */
  years: YearItem[] = [];
  /**Selected start date */
  startDate: Date | null = null;
  /**Selected end date */
  endDate: Date | null = null;
  /* ----- Template references ----- */
  /**Year grid container */
  @ViewChild('yearGrid') yearGrid!: ElementRef;
  /* Lifecycle Hooks */
  /**Initialize calendar */
  ngOnInit() {
    const today = new Date();
    //Default selection
    this.startDate = today;
    //set first day of month
    this.currentMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );
    this.tempYear = today.getFullYear();
    this.buildYears();
    this.generateCalendar();
  }

  /**Watch input changes */
  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['noPastYears'] ||
      changes['noFutureYears'] ||
      changes['pastYearLimit'] ||
      changes['futureYearLimit']
    ) {
      this.buildYears();
    }
  }
  /**
   * Toggle calendar popup
   */
  toggle() {
    this.show = !this.show;
  }
  /**Close calendar & year picker */
  close() {
    this.show = false;
    this.showYearPicker = false;
  }
  /* ----- Month navigation ----- */
  /**Navigate to previous month */
  prevMonth() {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() - 1,
      1
    );
    this.generateCalendar();
  }
  /**Navigate to next month */
  nextMonth() {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1,
      1
    );
    this.generateCalendar();
  }
  /* ----- Calendar Generation ------ */
  /**
   * Generate monthly calendar grid
   */
  generateCalendar() {
    this.days = [];
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    // Week start(Month based)
    const firstDay = new Date(year, month, 1).getDay();
    const startOffset = firstDay === 0 ? 6 : firstDay - 1;
    const totalDays = new Date(year, month + 1, 0).getDate();
    // Previous month fillers
    for (let i = 0; i < startOffset; i++) {
      this.days.push({
        date: new Date(),
        currentMonth: false
      });
    }
    //Current month days
    for (let i = 1; i <= totalDays; i++) {
      const dates = new Date(year, month, i);
      const isStart =
        this.startDate &&
        dates.toDateString() === this.startDate.toDateString();
      const isEnd =
        this.endDate &&
        dates.toDateString() === this.endDate.toDateString();
      this.days.push({
        date: dates,
        currentMonth: true,
        selected: this.isSelected(dates),
        inRange: this.isInRange(dates),
        rangeStart: !!isStart,
        rangeEnd: !!isEnd,
      });
    }
    //Next moth fillers
    const remaining = 42 - this.days.length;
    for (let i = 0; i < remaining; i++) {
      this.days.push({
        date: new Date(),
        currentMonth: false
      });
    }
  }
  /* ------ Date selection ----- */
  /**Select a day */
  selectDate(day: Day) {
    if (!day.currentMonth) return;
    //Single mode
    if (this.type === 'single') {
      const selected = new Date(day.date);
      this.startDate = selected;
      this.close();
    }
    //Range mode
    if (this.type === 'range') {
      if (!this.startDate || this.endDate) {
        this.startDate = day.date;
        this.endDate = null;
      } else {
        if (day.date < this.startDate) {
          this.endDate = this.startDate;
          this.startDate = day.date;
        } else {
          this.endDate = day.date;
        }
      }
    }
    this.generateCalendar();
  }
  /* ----- Selection helpers ------ */
  /**Check if date is selected */
  isSelected(date: Date) {
    if (this.type === 'single') {
      return (
        this.startDate?.toDateString() ===
        date.toDateString()
      );
    }
    return (
      this.startDate?.toDateString() ===
      date.toDateString() ||
      this.endDate?.toDateString() ===
      date.toDateString()
    );
  }
  /**Check if date is in range */
  isInRange(date: Date) {
    if (!this.startDate || !this.endDate) return false;
    return date > this.startDate && date < this.endDate;
  }
  /* ----- Display helpers ----- */
  /**
   * Display value in input
   */
  get displayValue() {
    if (this.type === 'single') {
      return this.startDate
        ? this.format(this.startDate)
        : '';
    }
    if (this.startDate && this.endDate) {
      return `${this.format(this.startDate)} To ${this.format(this.endDate)}`;
    }
    return '';
  }
  /**Format date string */
  format(d: Date) {
    const day = d.toLocaleDateString('en-GB', { day: '2-digit' });
    const month = d.toLocaleDateString('en-GB', { month: 'short' });
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  }
  /* ----- Outside click handler ----- */
  /**Close picker on outside click */
  @HostListener('document:click', ['$event'])
  clickOutside(e: Event) {
    const target = e.target as HTMLElement;
    if (!target.closest('.date-picker')) {
      this.close();
    }
  }
  /**Build selectable years list */
  buildYears() {
    const current = new Date().getFullYear();
    const pastLimit =
      this.pastYearLimit !== null
        ? Number(this.pastYearLimit)
        : null;
    const futureLimit =
      this.futureYearLimit !== null
        ? Number(this.futureYearLimit)
        : null;
    const start = 1900;
    const end = 2100;
    this.years = [];
    for (let i = start; i <= end; i++) {
      let disabled = false;
      if (this.noPastYears && i < current) {
        disabled = true;
      }
      if (this.noFutureYears && i > current) {
        disabled = true;
      }
      if (
        !this.noPastYears &&
        pastLimit !== null &&
        i < current - pastLimit
      ) {
        disabled = true;
      }
      if (
        !this.noFutureYears &&
        futureLimit !== null &&
        i > current + futureLimit
      ) {
        disabled = true;
      }
      this.years.push({
        value: i,
        disabled
      });
    }
    //Reset invalid year
    const valid = this.years.find(
      year => year.value === this.tempYear && !year.disabled
    );
    if (!valid) {
      this.tempYear = current;
    }
  }
  /**Open year selector */
  openYearPicker() {
    const current = new Date().getFullYear();
    this.tempYear = current;
    this.showYearPicker = true;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.scrollToYear();
      });
    });
  }
  /**Scroll to selected year */
  scrollToYear() {
    if (!this.yearGrid) return;
    const current = new Date().getFullYear();
    const items =
      this.yearGrid.nativeElement.querySelectorAll(
        '.year-item'
      );
    if (!items || !items.length) return;
    const index = this.years.findIndex(
      year => year.value === current
    );
    if (index === -1) return;
    const el = items[index] as HTMLElement;
    el.scrollIntoView({
      behavior: 'auto',
      block: 'center'
    });
  }
  /**Cancel year selection */
  cancelYear() {

    this.showYearPicker = false;
  }
  /**Apply selected year */
  selectYear() {
    const selected = this.years.find(
      year => year.value === this.tempYear
    );
    if (!selected || selected.disabled) return;
    this.currentMonth = new Date(
      this.tempYear,
      this.currentMonth.getMonth(),
      1
    );
    this.generateCalendar();
    this.showYearPicker = false;
  }
}