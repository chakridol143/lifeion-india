import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  newsletterForm!: FormGroup;
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.initializeForms();
  }

  ngOnInit(): void {
    // Component initialized
  }

  private initializeForms(): void {
    // Contact Form
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s\-\(\)]{10,}$/)]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      consent: [false]
    });

    // Newsletter Form
    this.newsletterForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  /**
   * Submit contact form
   * Logs form data and shows success message
   */
  submitForm(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('[v0] Contact form submitted:', formData);
      
      // TODO: Replace with actual API call
      // this.contactService.submitContactForm(formData).subscribe(...)
      
      this.formSubmitted = true;
      this.contactForm.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.formSubmitted = false;
      }, 5000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  /**
   * Submit newsletter form
   * Logs newsletter subscription
   */
  submitNewsletter(): void {
    if (this.newsletterForm.valid) {
      const emailData = this.newsletterForm.value;
      console.log('[v0] Newsletter subscription:', emailData);
      
      // TODO: Replace with actual API call
      // this.newsletterService.subscribe(emailData.email).subscribe(...)
      
      this.newsletterForm.reset();
      alert('Thank you for subscribing!');
    }
  }
}
