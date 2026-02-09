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

    this.products = productsArray
  .slice()            // clone array (important!)
  .reverse()          // reverse order (latest first)
  .slice(0, 10)       // take only 10 products
  .map((p: any) => ({
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

maxVisibleProducts = 10;
productWidth = 300; // must match CSS card width

nextProduct() {
  if (this.currentIndex < this.maxVisibleProducts - 1) {
    this.currentIndex++;
    this.scrollToIndex();
  }
}

prevProduct() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
    this.scrollToIndex();
  }
}


  // scrollToIndex() {
  //   const container = document.querySelector('.products-container');
  //   if (container) {
  //     container.scrollTo({
  //       left: this.currentIndex * 300,
  //       behavior: 'smooth'
  //     });
  //   }
  // }
  scrollToIndex() {
  const container = document.querySelector('.products-container');
  if (container) {
    container.scrollTo({
      left: this.currentIndex * this.productWidth,
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
      icon: '<svg width="46" height="38" viewbox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M37.0357 2.0444H37.0347C29.2298 2.4379 26.8539 10.3467 30.5977 15.4217L29.3874 16.5609C28.2663 15.6062 26.8415 15.0828 25.369 15.0848C24.6463 15.1058 23.9307 15.2344 23.2459 15.4663C19.6158 8.34168 13.651 0.342105 13.5896 0.259927C13.523 0.178666 13.4391 0.113205 13.344 0.0682587C13.249 0.0233127 13.1452 0 13.0401 0C12.9349 0 12.8311 0.0233127 12.7361 0.0682587C12.6411 0.113205 12.5572 0.178666 12.4905 0.259927C11.9804 0.941505 -0.000366038 17.0356 8.38762e-09 24.0243C0.504778 39.4531 21.3888 41.8373 25.603 27.4276C30.5151 27.3404 33.3478 21.4129 30.3267 17.5609L31.5314 16.4273C32.7871 17.5529 34.5055 18.3301 36.717 18.4863L36.8078 20.6667C29.466 21.9186 29.9515 32.6224 37.7481 32.9293C45.6693 32.6536 46.0482 21.418 38.1782 20.5985L38.0886 18.4451C48.2236 16.8647 47.3649 2.3603 37.0357 2.0444ZM11.7549 35.5422C6.7218 34.9869 1.55972 31.1993 1.37231 24.0065C1.37231 18.2957 10.66 5.1159 13.04 1.83228C14.5917 3.97154 19.0739 10.3144 22.0063 16.0642C21.2775 16.5263 20.6631 17.1479 20.2096 17.882C15.1091 17.8526 9.65044 19.4088 4.613 19.1211C4.48058 19.1106 4.34804 19.1398 4.23231 19.205C4.11657 19.2702 4.02291 19.3684 3.96327 19.4871C0.274535 26.0964 5.60618 34.4422 13.0402 34.3015C15.2615 34.2965 17.422 33.5754 19.201 32.2453C20.9801 30.9152 22.2828 29.0469 22.916 26.9178C23.3328 27.0883 23.7659 27.2158 24.2086 27.2986C22.2432 33.7101 16.6207 36.0766 11.7549 35.5422ZM21.6748 26.2263C21.1793 28.1409 20.0632 29.8372 18.501 31.0499C16.9389 32.2626 15.0188 32.9233 13.0412 32.9286C6.83674 33.0849 2.14521 26.1459 4.98546 20.5139C9.76236 20.695 14.7849 19.368 19.5696 19.2656C18.7868 21.7421 19.4526 24.5486 21.6748 26.2266V26.2263ZM25.4201 26.0656C24.4174 26.0286 23.585 25.7819 22.9081 25.3965C22.8531 25.3489 22.7906 25.3106 22.7232 25.2831C20.5783 23.8978 20.0984 21.0671 21.1831 18.9265C21.2134 18.8819 21.2379 18.8337 21.2563 18.7831C21.6917 18.0052 22.355 17.3795 23.157 16.9902C23.2082 16.9838 23.2557 16.9602 23.2917 16.9233C23.9557 16.6323 24.6701 16.4738 25.3948 16.4566C31.7481 16.6798 31.746 25.8297 25.4196 26.0659L25.4201 26.0656ZM42.553 26.752C42.5528 28.0217 42.0501 29.2398 41.1546 30.14C40.2592 31.0402 39.0438 31.5494 37.7741 31.5563C31.3495 31.3131 31.3476 22.2054 37.7486 21.9476C39.0223 21.9492 40.2433 22.4558 41.1439 23.3565C42.0445 24.2571 42.551 25.4782 42.5525 26.7519L42.553 26.752ZM37.089 17.1438C34.8718 17.0558 33.2303 16.2275 32.1067 15.049C32.0837 14.9986 32.0442 14.9575 31.9947 14.9324C28.416 10.774 30.364 3.74606 37.0618 3.41644C46.1656 3.79621 46.1591 16.7513 37.089 17.1438Z" fill="white"></path><path d="M37.0383 6.84863C33.0466 7.01564 33.0659 13.5763 37.0618 13.712C41.0686 13.5632 41.0873 6.99889 37.0383 6.84863ZM37.0618 12.3383C34.8589 12.2341 34.864 8.32362 37.038 8.2203C39.2665 8.30595 39.2758 12.2248 37.0618 12.3383Z" fill="white"></path> <path d="M26.7676 18.5156C26.5856 18.5156 26.411 18.5879 26.2823 18.7166C26.1536 18.8454 26.0813 19.0199 26.0813 19.202V20.5746H24.7086V19.202C24.7086 19.0199 24.6363 18.8454 24.5076 18.7166C24.3789 18.5879 24.2043 18.5156 24.0223 18.5156C23.8402 18.5156 23.6657 18.5879 23.537 18.7166C23.4082 18.8454 23.3359 19.0199 23.3359 19.202V23.32C23.3359 23.502 23.4082 23.6766 23.537 23.8053C23.6657 23.934 23.8402 24.0063 24.0223 24.0063C24.2043 24.0063 24.3789 23.934 24.5076 23.8053C24.6363 23.6766 24.7086 23.502 24.7086 23.32V21.9473H26.0813V23.32C26.0852 24.2168 27.4501 24.2181 27.454 23.32V19.202C27.454 19.0199 27.3816 18.8454 27.2529 18.7166C27.1242 18.5879 26.9496 18.5156 26.7676 18.5156Z" fill="white"></path> <path d="M37.0621 26.0658V24.6932C37.0621 24.5111 36.9898 24.3366 36.8611 24.2079C36.7324 24.0791 36.5578 24.0068 36.3758 24.0068C36.1938 24.0068 36.0192 24.0791 35.8905 24.2079C35.7618 24.3366 35.6895 24.5111 35.6895 24.6932V28.8112C35.6895 28.9932 35.7618 29.1678 35.8905 29.2965C36.0192 29.4252 36.1938 29.4975 36.3758 29.4975C36.5578 29.4975 36.7324 29.4252 36.8611 29.2965C36.9898 29.1678 37.0621 28.9932 37.0621 28.8112V27.4385H38.4348V28.8112C38.4348 28.9932 38.5071 29.1678 38.6358 29.2965C38.7645 29.4252 38.9391 29.4975 39.1211 29.4975C39.3032 29.4975 39.4777 29.4252 39.6064 29.2965C39.7352 29.1678 39.8075 28.9932 39.8075 28.8112V24.6932C39.8075 24.5111 39.7352 24.3366 39.6064 24.2079C39.4777 24.0791 39.3032 24.0068 39.1211 24.0068C38.9391 24.0068 38.7645 24.0791 38.6358 24.2079C38.5071 24.3366 38.4348 24.5111 38.4348 24.6932V26.0658H37.0621Z" fill="white"></path>              </svg>'
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
