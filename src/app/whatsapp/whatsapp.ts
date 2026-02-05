import { Component, ElementRef, HostListener } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp',
  imports: [CommonModule],
  templateUrl: './whatsapp.html',
  styleUrl: './whatsapp.css',
})
export class Whatsapp {
  showMenu = false;

  constructor(private eRef: ElementRef) { }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {

      this.showMenu = false;
    }
  }
}
