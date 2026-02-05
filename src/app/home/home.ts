import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../water-systems/product.service';
import { Router } from '@angular/router';

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
products: any[] = [];
currentIndex = 0;


constructor(
  private productService: ProductService,
  private router: Router
) {}


viewProduct(product: any) {
  console.log('BUTTON CLICKED', product);

  if (product.menuTypeId === 1) {
    // Ionizer Filter details page
    this.router.navigate(['/product/ionizer', product.id]);
  }
  else if (product.menuTypeId === 2) {
    // Water System details page
    this.router.navigate(['/product/water-system', product.id]);
  }
  else {
    console.warn('Unknown menuTypeId:', product.menuTypeId);
  }
}



ngOnInit(): void {
  this.productService.getAll().subscribe((res: any) => {
    console.log('API RESPONSE 👉', res);

    const productsArray = Array.isArray(res)
      ? res
      : res.products;

    if (!Array.isArray(productsArray)) {
      console.error('Products is not an array:', res);
      return;
    }

    this.products = productsArray.map((p: any) => ({
      id: p.product_id,
      name: p.name,
      price: p.price,
      menuTypeId: p.menu_type_id,
      image: p.image_url
        ? 'https://lifeion-backend-production.up.railway.app/assets/images/' + p.image_url
        : 'assets/images/placeholder.png'
    }));
  });
}


   nextProduct() {
    this.currentIndex++;
    this.scrollToIndex();
  }

  prevProduct() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.scrollToIndex();
    }
  }

  scrollToIndex() {
    const container = document.querySelector('.products-container');
    if (container) {
      container.scrollTo({
        left: this.currentIndex * 300,
        behavior: 'smooth'
      });
    }
  }
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
      image: '/images/01.webp'
    },
    {
      name: 'Lindsey Jacobellis',
      title: 'Olympic Snowboarder',
      image: '/images/04.webp'
    },
    {
      name: 'Jordan Kunaszyk',
      title: 'NFL Pro',
      image: '/images/05.webp'
    },
    {
      name: 'Cecil Fielder',
      title: 'MLB',
      image: '/images/15.webp'
    },
    {
      name: 'Jake Voskuhl',
      title: 'NBA PLAYER',
      image: '/images/13.webp'
    },
    {
      name: 'Oscar Valdez',
      title: 'Professional Boxer',
      image: '/images/14.webp'
    },
    {
      name: 'Femi Ayanbadejo',
      title: 'NFL Veteran',
      image: '/images/08_84852755-45ad-4a2f-af9c-520e0ac421ed.webp'
    },
    {
      name: 'Josh Hart',
      title: 'NBA Pro',
      image: '/images/06.webp'
    }
  ];

  // Customers data
  customers: Celebrity[] = [
    {
      name: 'Ruben',
      title: 'Happy Customer',
      image: '/images/10.webp'
    },
    {
      name: 'Marisa',
      title: 'Happy Customer',
      image: '/images/03.webp'
    },
    {
      name: 'Travis Illian',
      title: 'Happy Customer',
      image: '/images/travis.webp'
    },
    {
      name: 'Mark Wright',
      title: 'Wellness Expert',
      image: '/images/11_6bfbf29a-1431-49e4-bcee-6ffa21de2fe0.webp'
    },
    {
      name: 'Rob Carpenter',
      title: 'Cancer Survivor',
      image: '/images/rob.webp'
    },
    {
      name: 'Dr. Mike Grego',
      title: 'Naturopathic Chiropractor',
      image: '/images/mike.webp'
    },
    {
      name: 'Debra',
      title: 'Registered Nurse & Owner of Wellness Center',
      image: '/images/debra.webp'
    },
    {
      name: 'Laz Alonso',
      title: 'American Actor',
      image: '/images/Laz.webp'
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

  // ngOnInit(): void {
  //   console.log('[v0] Home component initialized with all sections');
  // }

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
