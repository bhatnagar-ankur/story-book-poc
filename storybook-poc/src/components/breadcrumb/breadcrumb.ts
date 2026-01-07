import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  imports: [],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss',
})
export class Breadcrumb {
  //#region Inputs
  /* ----- Inputs ----- */
  @Input() items: string[] = [];
  @Input() separator: '/' | '>' | '>>' | 'triangle' = '/';
  //#endregion
}
