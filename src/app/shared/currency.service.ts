import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type CurrencyCode = 'USD' | 'INR';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  private readonly rates: Record<CurrencyCode, number> = {
    USD: 1,
    INR: 83, // rough spot; adjust if needed
  };

  private currency$ = new BehaviorSubject<CurrencyCode>('USD');

  setCurrency(code: CurrencyCode) {
    if (code === this.currency$.value) return;
    this.currency$.next(code);
    localStorage.setItem('currency', code);
  }

  getCurrency() {
    return this.currency$.value;
  }

  currencyChanges() {
    return this.currency$.asObservable();
  }

  loadFromStorage() {
    const saved = localStorage.getItem('currency') as CurrencyCode | null;
    if (saved && (saved === 'USD' || saved === 'INR')) {
      this.currency$.next(saved);
    }
  }

  convert(amount: number): number {
    const rate = this.rates[this.currency$.value] ?? 1;
    return amount * rate;
  }

  format(amount: number): string {
    const code = this.currency$.value;
    const converted = this.convert(amount);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: code,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(converted);
  }
}
