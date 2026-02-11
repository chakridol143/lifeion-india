import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyDisplayPipe } from '../shared/currency-display.pipe';

@Component({
  selector: 'app-compaison',
  imports: [CommonModule, CurrencyDisplayPipe],
  templateUrl: './compaison.html',
  styleUrl: './compaison.css',
})
export class Compaison {

}
