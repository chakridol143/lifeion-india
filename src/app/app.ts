import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { FooterComponent } from './footer/footer';
import { Whatsapp } from './whatsapp/whatsapp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,FooterComponent, Whatsapp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('li-india');
}
