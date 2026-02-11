import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from './currency.service';

@Pipe({
  name: 'currencyDisplay',
  standalone: true,
  pure: false, // update when currency changes
})
export class CurrencyDisplayPipe implements PipeTransform {
  constructor(private currency: CurrencyService) {}

  transform(value: number | string | null | undefined): string {
    if (value === null || value === undefined || value === '') return '';
    const numeric = Number(String(value).replace(/[^0-9.-]/g, ''));
    if (!Number.isFinite(numeric)) return '';
    return this.currency.format(numeric);
  }
}
