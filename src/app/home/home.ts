import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Review {
  title: string;
  text: string;
  name: string;
  timeAgo: string;
}

interface Celebrity {
  name: string;
  title: string;
  image: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface Product {
  name: string;
  image: string;
  price: number;
  emi: number;
  reviews: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  activeTab: 'athletes' | 'customers' = 'athletes';

  // Reviews data
  reviews: Review[] = [
    {
      title: "I've had the MXL-9 alkalin...",
      text: "I've had the MXL-9 alkaline water machine for a few years now and it's been rock solid...",
      name: 'Tennison',
      timeAgo: '5 hours ago'
    },
    {
      title: 'Me and my family love this',
      text: 'Me and my family love this, it is amazing when you wake up at 3am with a mouth like t...',
      name: 'Oliver B.',
      timeAgo: '3 days ago'
    },
    {
      title: 'Better',
      text: "We've used our Life Ionizer system for a while now, and our family loves the water fo...",
      name: 'Greg Antosik',
      timeAgo: '3 days ago'
    },
    {
      title: 'Cheers to HEALTHY Hy...',
      text: 'I\'ve been using my MXL-11 for a year n...',
      name: 'Lynn',
      timeAgo: '4 days ago'
    },
    {
      title: 'Our family has had a Life I...',
      text: 'Our family has had a Life Ionizer system for a while and enjoys the water it provides...',
      name: 'Quintan Martin',
      timeAgo: '4 days ago'
    }
  ];

  // Athletes data
  athletes: Celebrity[] = [
    {
      name: 'Barry Zito',
      title: 'World Champion Pitcher',
      image: '/images/barry-zito.webp'
    },
    {
      name: 'Lindsey Jacobellis',
      title: 'Olympic Snowboarder',
      image: '/images/lindsey-jacobellis.webp'
    },
    {
      name: 'Jordan Kunaszyk',
      title: 'NFL Pro',
      image: '/images/jordan-kunaszyk.webp'
    },
    {
      name: 'Cecil Fielder',
      title: 'MLB',
      image: '/images/cecil-fielder.webp'
    },
    {
      name: 'Jake Voskuhl',
      title: 'NBA PLAYER',
      image: '/images/jake-voskuhl.webp'
    },
    {
      name: 'Oscar Valdez',
      title: 'Professional Boxer',
      image: '/images/oscar-valdez.webp'
    },
    {
      name: 'Femi Ayanbadejo',
      title: 'NFL Veteran',
      image: '/images/femi-ayanbadejo.webp'
    },
    {
      name: 'Josh Hart',
      title: 'NBA Pro',
      image: '/images/josh-hart.webp'
    }
  ];

  // Customers data
  customers: Celebrity[] = [
    {
      name: 'Maria Johnson',
      title: 'Fitness Enthusiast',
      image: '/images/customer-1.webp'
    },
    {
      name: 'Sarah Williams',
      title: 'Health Coach',
      image: '/images/customer-2.webp'
    },
    {
      name: 'Michael Chen',
      title: 'Business Owner',
      image: '/images/customer-3.webp'
    },
    {
      name: 'Emma Davis',
      title: 'Wellness Expert',
      image: '/images/customer-4.webp'
    },
    {
      name: 'Robert Smith',
      title: 'Family Man',
      image: '/images/customer-5.webp'
    },
    {
      name: 'Lisa Anderson',
      title: 'Nutritionist',
      image: '/images/customer-6.webp'
    },
    {
      name: 'David Martinez',
      title: 'Athlete',
      image: '/images/customer-7.webp'
    },
    {
      name: 'Jennifer Brown',
      title: 'Health Advocate',
      image: '/images/customer-8.webp'
    }
  ];

  // Benefits data
  benefits: Benefit[] = [
    {
      title: 'Hydrogen Rich',
      description: 'Enjoy hydrogen-rich water that boosts energy, enhances hydration, and supports cellular health.',
      icon: '/images/hydrogen-icon.svg'
    },
    {
      title: 'Anti-Aging',
      description: 'Combat signs of aging naturally with water that helps reduce oxidative stress and supports youthful vitality.',
      icon: '/images/anti-aging-icon.svg'
    },
    {
      title: 'Antioxidants',
      description: 'Packed with powerful antioxidants that help neutralize harmful free radicals and support overall wellness.',
      icon: '/images/antioxidants-icon.svg'
    }
  ];

  // Products data
  products: Product[] = [
    {
      name: 'Best Value Ionizer Core MXL-5™ Alkaline Water Hydrogen Machine - Counter Top',
      image: '/images/product-mxl5.webp',
      price: 1697,
      emi: 39.97,
      reviews: 34
    },
    {
      name: 'Strongest Ionizer Supreme MXL-9™ Alkaline Water Hydrogen Machine - Counter Top',
      image: '/images/product-mxl9.webp',
      price: 2697,
      emi: 69.36,
      reviews: 46
    },
    {
      name: "World's Most Powerful Ionizer Apex MXL-15™ Under Counter Hydrogen Water Alkaline Machine",
      image: '/images/product-mxl15.webp',
      price: 4697,
      emi: 111.02,
      reviews: 55
    }
  ];

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

  ngOnInit(): void {
    console.log('[v0] Home component initialized with all sections');
  }

  // Review carousel navigation
  prevReview(): void {
    this.reviews.push(this.reviews.shift()!);
  }

  nextReview(): void {
    this.reviews.unshift(this.reviews.pop()!);
  }

  // Benefit carousel navigation
  prevBenefit(): void {
    this.benefits.push(this.benefits.shift()!);
  }

  nextBenefit(): void {
    this.benefits.unshift(this.benefits.pop()!);
  }

  // Product carousel navigation
  prevProduct(): void {
    this.products.push(this.products.shift()!);
  }

  nextProduct(): void {
    this.products.unshift(this.products.pop()!);
  }

  // Handle financing form submission
  onFinancingSubmit(): void {
    if (!this.financingForm.waterType || !this.financingForm.systemType) {
      alert('Please fill in all required fields');
      return;
    }

    console.log('Financing Form Submitted:', this.financingForm);
    alert(
      `Thank you! We'll check your financing rates for: ${this.financingForm.waterType} water with ${this.financingForm.systemType} system.`
    );

    this.resetFinancingForm();
  }

  // Handle water report form submission
  onReportSubmit(): void {
    if (!this.waterReportForm.reportWaterType || !this.waterReportForm.reportSystemType) {
      alert('Please fill in all required fields');
      return;
    }

    if (!this.waterReportForm.marketingConsent) {
      alert('Please agree to the privacy policy');
      return;
    }

    console.log('Water Report Form Submitted:', this.waterReportForm);
    alert(
      `Thank you! Your free water quality report will be sent to your email. We will contact you soon with a consultation.`
    );

    this.resetWaterReportForm();
  }

  // Reset financing form
  resetFinancingForm(): void {
    this.financingForm = {
      waterType: '',
      systemType: '',
    };
  }

  // Reset water report form
  resetWaterReportForm(): void {
    this.waterReportForm = {
      reportWaterType: '',
      reportSystemType: '',
      marketingConsent: false,
    };
  }

  // Scroll to section
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
