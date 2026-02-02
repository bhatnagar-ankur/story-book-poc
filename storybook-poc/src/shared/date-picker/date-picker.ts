import { CommonModule, DatePipe } from '@angular/common';
import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Day {
  date: Date;
  currentMonth: boolean;

  selected?: boolean;
  inRange?: boolean;

  rangeStart?: boolean;
  rangeEnd?: boolean;
}

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
  @Input() type: 'single' | 'range' = 'single';
  @Input() icon?: string;
  @Input() noPastYears = false;
  @Input() noFutureYears = false;
  @Input() pastYearLimit: number | null = null;
  @Input() futureYearLimit: number | null = null;

  show = false;
  showYearPicker = false;
  currentMonth = new Date();
  tempYear!: number;
  days: Day[] = [];
  years: YearItem[] = [];
  startDate: Date | null = null;
  endDate: Date | null = null;
  @ViewChild('yearGrid') yearGrid!: ElementRef;

  ngOnInit() {
    const today = new Date();
    this.startDate = today;
    this.currentMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );
    this.tempYear = today.getFullYear();
    this.buildYears();
    this.generateCalendar();
  }


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

  toggle() {
    this.show = !this.show;
  }

  close() {
    this.show = false;
    this.showYearPicker = false;
  }

  prevMonth() {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() - 1,
      1
    );
    this.generateCalendar();
  }


  nextMonth() {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1,
      1
    );
    this.generateCalendar();
  }
  generateCalendar() {
    this.days = [];
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const startOffset = firstDay === 0 ? 6 : firstDay - 1;
    const totalDays = new Date(year, month + 1, 0).getDate();
    for (let i = 0; i < startOffset; i++) {
      this.days.push({
        date: new Date(),
        currentMonth: false
      });
    }

    for (let i = 1; i <= totalDays; i++) {
      const d = new Date(year, month, i);
      const isStart =
        this.startDate &&
        d.toDateString() === this.startDate.toDateString();
      const isEnd =
        this.endDate &&
        d.toDateString() === this.endDate.toDateString();
      this.days.push({
        date: d,
        currentMonth: true,
        selected: this.isSelected(d),
        inRange: this.isInRange(d),
        rangeStart: !!isStart,
        rangeEnd: !!isEnd,
      });

    }
    const remaining = 42 - this.days.length;
    for (let i = 0; i < remaining; i++) {
      this.days.push({
        date: new Date(),
        currentMonth: false
      });
    }
  }

  selectDate(day: Day) {
    if (!day.currentMonth) return;
    if (this.type === 'single') {
      const selected = new Date(day.date);
      this.startDate = selected;
      this.close();
    }

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


  isInRange(date: Date) {
    if (!this.startDate || !this.endDate) return false;
    return date > this.startDate && date < this.endDate;
  }

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


  format(d: Date) {
    const day = d.toLocaleDateString('en-GB', { day: '2-digit' });
    const month = d.toLocaleDateString('en-GB', { month: 'short' });
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(e: Event) {
    const target = e.target as HTMLElement;
    if (!target.closest('.date-picker')) {
      this.close();
    }
  }

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
    const valid = this.years.find(
      y => y.value === this.tempYear && !y.disabled
    );
    if (!valid) {
      this.tempYear = current;
    }
  }

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

  scrollToYear() {
    if (!this.yearGrid) return;
    const current = new Date().getFullYear();
    const items =
      this.yearGrid.nativeElement.querySelectorAll(
        '.year-item'
      );
    if (!items || !items.length) return;
    const index = this.years.findIndex(
      y => y.value === current
    );
    if (index === -1) return;
    const el = items[index] as HTMLElement;
    el.scrollIntoView({
      behavior: 'auto',
      block: 'center'
    });
  }

  cancelYear() {

    this.showYearPicker = false;
  }

  selectYear() {
    const selected = this.years.find(
      y => y.value === this.tempYear
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
