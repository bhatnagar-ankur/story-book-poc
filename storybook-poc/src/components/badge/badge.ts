import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/* ----- Badge Types ----- */
type BadgeColor = 'gray' | 'green' | 'red' | 'orange' | 'purple' | 'teal';
type BadgeAppearance = 'solid' | 'subtle' | 'outline';

@Component({
  selector: 'app-badge',
  imports: [CommonModule],
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
})
export class Badge {
  //#region Inputs
  /* ----- Inputs ----- */
  @Input() color: BadgeColor = 'gray';
  @Input() appearance: BadgeAppearance = 'solid';
  //#endregion
}
