import { CommonModule, DatePipe } from '@angular/common';
import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Day {
  date: Date;
  currentMonth: boolean;
  selected?: boolean;
  inRange?: boolean;
}
@Component({
  selector: 'app-date-picker',
  imports: [CommonModule, DatePipe, FormsModule],
  templateUrl: './date-picker.html',
  styleUrl: './date-picker.scss',
})
export class DatePicker {
  @Input() type: 'single' | 'range' = 'single';

  show = false;
  showYearPicker = false;
  @Input() icon?: string;
  tempYear!: number;

  today = new Date();
  currentMonth = new Date();
  selectedYear = new Date().getFullYear();

  days: Day[] = [];
  hour!: number;
  minute!: number;
  period!: 'AM' | 'PM';

@ViewChild('yearGrid') yearGrid!: ElementRef;
  startDate: Date | null = null;
  endDate: Date | null = null;
  years: number[] = [];

  ngOnInit() {
const today = new Date();

this.startDate = today;
this.currentMonth = new Date(
  today.getFullYear(),
  today.getMonth(),
  1
);

    const current = new Date().getFullYear();

    for (let i = current - 50; i <= current + 10; i++) {
      this.years.push(i);
    }

    this.generateCalendar();
    const now = new Date();
    this.tempYear = this.currentMonth.getFullYear();

    let h = now.getHours();

    this.period = h >= 12 ? 'PM' : 'AM';

    h = h % 12 || 12;

    this.hour = h;
    this.minute = now.getMinutes();

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

    const totalDays = new Date(year, month + 1, 0).getDate();

    // Only current month days
    for (let i = 1; i <= totalDays; i++) {

      const d = new Date(year, month, i);

      this.days.push({
        date: d,
        currentMonth: true,
        selected: this.isSelected(d),
        inRange: this.isInRange(d),
      });
    }
  }


  selectDate(day: Day) {

    if (!day.currentMonth) return;

    if (this.type === 'single') {

      const selected = new Date(day.date);

      let h = this.hour;

      if (this.period === 'PM' && h !== 12) h += 12;
      if (this.period === 'AM' && h === 12) h = 0;

      selected.setHours(h);
      selected.setMinutes(this.minute);

      this.startDate = selected;

      this.close();
    }


    if (this.type === 'range') {

      if (!this.startDate || this.endDate) {
        this.startDate = day.date;
        this.endDate = null;
      }
      else {
        this.endDate = day.date;
      }
    }

    this.generateCalendar();
  }

  isSelected(date: Date) {

    if (this.type === 'single') {
      return this.startDate?.toDateString() === date.toDateString();
    }

    return (
      this.startDate?.toDateString() === date.toDateString() ||
      this.endDate?.toDateString() === date.toDateString()
    );
  }

  isInRange(date: Date) {

    if (!this.startDate || !this.endDate) return false;

    return date > this.startDate && date < this.endDate;
  }

  get displayValue() {

    if (this.type === 'single') {
      return this.startDate
        ? this.formatWithTime(this.startDate)
        : '';
    }

    if (this.startDate && this.endDate) {
      return `${this.format(this.startDate)} to ${this.format(this.endDate)}`;
    }

    return '';
  }


  formatWithTime(d: Date) {

    let hours = d.getHours();
    const minutes = d.getMinutes();

    const period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    return `${d.toLocaleDateString('en-GB')} 
          ${hours}:${minutes < 10 ? '0' + minutes : minutes} ${period}`;
  }


  @HostListener('document:click', ['$event'])
  clickOutside(e: Event) {

    const target = e.target as HTMLElement;

    if (!target.closest('.date-picker')) {
      this.show = false;
    }
  }
  changeYear() {

    this.currentMonth = new Date(
      this.selectedYear,
      this.currentMonth.getMonth(),
      1
    );

    this.generateCalendar();
  }
  format(d: Date) {

    return d.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }
  openYearPicker() {

  this.tempYear = this.currentMonth.getFullYear();

  this.showYearPicker = true;

  setTimeout(() => {
    this.scrollToYear();
  });
}
scrollToYear() {

  if (!this.yearGrid) return;

  const index = this.years.indexOf(this.tempYear);

  if (index === -1) return;

  const itemHeight = 32;

  this.yearGrid.nativeElement.scrollTop = index * itemHeight;
}



  cancelYear() {

    this.showYearPicker = false;
  }


  selectYear() {

    this.currentMonth = new Date(
      this.tempYear,
      this.currentMonth.getMonth(),
      1
    );

    this.generateCalendar();

    this.showYearPicker = false;
  }

}
