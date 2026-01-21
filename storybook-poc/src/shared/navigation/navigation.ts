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
  @Input() expanded = true;

  navItems: NavItem[] = [
    {
      icon: 'assets/icons/home.svg',
      label: 'Dashboard'
    },
    {
      icon: 'assets/icons/user.svg',
      label: 'Users',
      children: ['Add User', 'User List']
    },
    {
      icon: 'assets/icons/settings.svg',
      label: 'Settings',
      children: ['Profile', 'Security']
    }
  ];

  toggle() {
    this.expanded = !this.expanded;
  }
}
