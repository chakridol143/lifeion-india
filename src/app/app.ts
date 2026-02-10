import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FooterComponent } from './footer/footer';
import { Whatsapp } from './whatsapp/whatsapp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,FooterComponent, Whatsapp],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  protected readonly title = signal('li-india');
  
}
