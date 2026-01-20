import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent implements OnInit {
  newsletterForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit(): void {
    // Component initialized
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
}
