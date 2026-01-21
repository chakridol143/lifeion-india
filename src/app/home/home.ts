import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Form data for financing
  financingForm = {
    waterType: '',
    systemType: '',
  };

  // Form data for water report
  waterReportForm = {
    reportWaterType: '',
    reportSystemType: '',
    marketingConsent: false,
  };

  // Water types and system types for dropdowns
  waterTypes = [
    { value: 'city', label: 'City' },
    { value: 'well', label: 'Well' },
    { value: 'rain', label: 'Rain' },
    { value: 'spring', label: 'Spring' },
    { value: 'unsure', label: 'Unsure' },
  ];

  systemTypes = [
    { value: 'whole-home', label: 'Whole Home' },
    { value: 'hydrogen-alkaline', label: 'Hydrogen Alkaline Ionizer' },
    { value: 'both', label: 'Both' },
  ];

  constructor() {}

  /**
   * Handle financing form submission
   */
  onFinancingSubmit(): void {
    // Validate form
    if (!this.financingForm.waterType || !this.financingForm.systemType) {
      alert('Please fill in all required fields');
      return;
    }

    console.log('Financing Form Submitted:', this.financingForm);

    // Here you would typically send this data to a backend API
    // Example: this.http.post('/api/financing', this.financingForm)

    // For now, just show a success message
    alert(
      `Thank you! We'll check your financing rates for: ${this.financingForm.waterType} water with ${this.financingForm.systemType} system.`
    );

    // Reset form
    this.resetFinancingForm();
  }

  /**
   * Handle water report form submission
   */
  onReportSubmit(): void {
    // Validate form
    if (!this.waterReportForm.reportWaterType || !this.waterReportForm.reportSystemType) {
      alert('Please fill in all required fields');
      return;
    }

    if (!this.waterReportForm.marketingConsent) {
      alert('Please agree to the privacy policy');
      return;
    }

    console.log('Water Report Form Submitted:', this.waterReportForm);

    // Here you would typically send this data to a backend API
    // Example: this.http.post('/api/water-report', this.waterReportForm)

    // For now, just show a success message
    alert(
      `Thank you! Your free water quality report will be sent to your email. We will contact you soon with a consultation.`
    );

    // Reset form
    this.resetWaterReportForm();
  }

  /**
   * Reset financing form
   */
  resetFinancingForm(): void {
    this.financingForm = {
      waterType: '',
      systemType: '',
    };
  }

  /**
   * Reset water report form
   */
  resetWaterReportForm(): void {
    this.waterReportForm = {
      reportWaterType: '',
      reportSystemType: '',
      marketingConsent: false,
    };
  }

  /**
   * Scroll to section (for CTA buttons)
   */
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
