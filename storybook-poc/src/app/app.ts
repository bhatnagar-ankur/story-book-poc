import { Component, signal } from '@angular/core';
import { Alert } from '../components/alert/alert.component';
import { Badge } from '../components/badge/badge';

@Component({
  selector: 'app-root',
  imports: [Alert,Badge],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('storybook-poc');
}
