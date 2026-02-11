import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CurrencyService, CurrencyCode } from '../shared/currency.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent implements OnInit {
  newsletterForm!: FormGroup;
  currency: CurrencyCode = 'USD';

  constructor(private formBuilder: FormBuilder, private currencyService: CurrencyService) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.currencyService.loadFromStorage();
    this.currency = this.currencyService.getCurrency();
  }

  private initializeForm(): void {
    // Newsletter Form
    this.newsletterForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  /**
   * Submit newsletter subscription
   * Logs newsletter subscription and resets form
   */
  submitNewsletter(): void {
    if (this.newsletterForm.valid) {
      const emailData = this.newsletterForm.value;
      console.log('[v0] Newsletter subscription from footer:', emailData);

      // TODO: Replace with actual API call
      // this.newsletterService.subscribe(emailData.email).subscribe(...)

      this.newsletterForm.reset();
      alert('Thank you for subscribing! Check your email for confirmation.');
    }
  }

  onCurrencyChange(code: CurrencyCode) {
    this.currency = code;
    this.currencyService.setCurrency(code);
  }
}
