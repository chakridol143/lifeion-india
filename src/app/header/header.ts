import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Search Panel States
  searchOpen = false;
  overlaySearch = '';

  // Mobile Menu States
  menuOpen = false;
  activeDropdown: string | null = null;

  // Desktop - Dropdown hover states
  hoverDropdown: string | null = null;

  // Navigation menu structure
  navItems = [
    {
      label: 'Home',
      route: '/',
      submenu: null,
    },
    {
      label: 'Water Systems',
      route: '/water-systems',
      icon: true,
      submenu: null,
    },
    {
      label: 'Comparison',
      route: '/compaison',
      icon: true,
      submenu: null,
    },
    {
      label: 'Learn',
      route: null,
      icon: true,
      submenu: [
        { label: 'Studies', route: '/learn/studies' },
        { label: 'Videos', route: '/learn/videos' },
        { label: 'Blog', route: '/learn/blog' },
        { label: 'Support', route: '/support' },
        { label: 'Free Water Report', route: '/learn/free-water-report' },
      ],
    },
    {
      label: 'Testimonials',
      route: '/testimonials',
      icon: true,
      submenu: [
        { label: 'Satisfied Customers', route: '/customers' },
        { label: 'Health Care Professionals', route: '/healthcare' },
        { label: 'Actors & Musicians', route: '/actors' },
        { label: 'Professional Athletes', route: '/athletes' },
      ],
    },
    {
      label: 'Finance',
      route: '/finance',
      submenu: null,
    },
    {
      label: 'About Us',
      route: '/aboutus',
      icon: true,
      submenu: [{ label: 'Contact', route: '/contact' }],
    },
    {
      label: 'Support',
      route: null,
      icon: true,
      submenu: [
        { label: 'Certifications', route: '/support/certifications' },
        { label: 'Our Company', route: '/support/our-company' },
        { label: 'Water FACTS', route: '/support/water-facts' },
        { label: 'Business Opportunities', route: '/support/business-opportunities' },
      ],
    },
  ];

  // Search methods
  openSearch(): void {
    this.searchOpen = true;
  }

  closeSearch(): void {
    this.searchOpen = false;
    this.overlaySearch = '';
  }

  onSearch(query: string): void {
    console.log('Searching for:', query);
  }

  performSearch(): void {
    if (this.overlaySearch.trim()) {
      console.log('Perform search:', this.overlaySearch);
      // Add your search logic here
      this.closeSearch();
    }
  }

  // Mobile menu methods
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) {
      this.activeDropdown = null;
    }
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.activeDropdown = null;
  }

  toggleDropdown(label: string): void {
    this.activeDropdown = this.activeDropdown === label ? null : label;
  }

  hasSubmenu(item: any): boolean {
    return item.submenu && item.submenu.length > 0;
  }

  // Desktop dropdown hover
  onDropdownHover(label: string): void {
    this.hoverDropdown = label;
  }

  onDropdownLeave(): void {
    this.hoverDropdown = null;
  }

  // Close menu when a link is clicked
  onNavClick(): void {
    this.closeMenu();
  }
}
