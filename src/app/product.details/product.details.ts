import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product.details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.details.html',
  styleUrl: './product.details.css',
})
export class ProductDetails implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  hero = {
    title: '',
    subtitle: '',
    description: '',
  };

  toolbar = {
    sortOptions: [
      'Featured',
      'Best selling',
      'Alphabetically, A-Z',
      'Alphabetically, Z-A',
      'Price, low to high',
      'Price, high to low',
      'Date, new to old',
      'Date, old to new',
    ],
    activeSort: 'Featured',
  };

  products: Array<{ name: string; price: number; badge?: string; image: string }> = [];

  private readonly collections = {
    mxl: {
      hero: {
        title: 'Life Ionizer M/MX/MXL Series Filters',
        subtitle: '(8 products)',
        description:
          'Experience the Life Ionizer M, MX, and MXL Series Replacement Filters, designed for powerful water ionization and filtration.',
      },
      products: [
        {
          name: 'MXL Internal Replacement Filter 1',
          price: 34.97,
          badge: 'Best Seller',
          image: '/images/Types_of_Life_Ionizer_Replacement_Filters_2.webp',
        },
        {
          name: 'MXL Internal Replacement Filter 2',
          price: 34.97,
          image: '/images/Types_of_Life_Ionizer_Replacement_Filters_2.webp',
        },
        {
          name: 'Ionizers MX Next Gen Filter 1',
          price: 69.97,
          image: '/images/Types_of_Life_Ionizer_Replacement_Filters_2.webp',
        },
        {
          name: 'Ionizers MX Next Gen Filter 2',
          price: 69.97,
          image: '/images/Types_of_Life_Ionizer_Replacement_Filters_2.webp',
        },
        {
          name: 'Citric Acidic Cleaner MXL 5',
          price: 34.97,
          image: '/images/Types_of_Life_Ionizer_Replacement_Filters_2.webp',
        },
        {
          name: 'Citric Acidic Cleaner MXL 9',
          price: 34.97,
          image: '/images/Types_of_Life_Ionizer_Replacement_Filters_2.webp',
        },
        {
          name: 'Citric Acidic Cleaner MXL 15',
          price: 34.97,
          image: '/images/Types_of_Life_Ionizer_Replacement_Filters_2.webp',
        },
        {
          name: 'Citric Acidic Cleaner MXL 25',
          price: 34.97,
          image: '/images/Types_of_Life_Ionizer_Replacement_Filters_2.webp',
        },
      ],
    },
    series7500: {
      hero: {
        title: 'Life Ionizer 7500/7600/8000 Series',
        subtitle: '(3 products)',
        description:
          'Experience the Life Ionizer 7500, 7600, and 8000 Series Replacement Filters, designed for powerful water ionization and filtration.',
      },
      products: [
        {
          name: 'Life 7500/7600/8000/8100 Citric Acidic Cleaner System',
          price: 34.97,
          image: '/images/Types_of_Life_Ionizer_Replacement_Filters_2.webp',
        },
        {
          name: 'Life 7500/7600/8000/8100 Filter #1',
          price: 69.97,
          image: '/images/Types_of_Life_Ionizer_Replacement_Filters_2.webp',
        },
        {
          name: 'Life 7500/7600/8000/8100 Filter #2',
          price: 69.97,
          image: '/images/Types_of_Life_Ionizer_Replacement_Filters_2.webp',
        },
      ],
    },
    series7700: {
      hero: {
        title: 'Life Ionizer 7700/9000/Next Gen Series',
        subtitle: '(3 products)',
        description:
          'Discover the Life Ionizer 7700, 9000, and Next Gen Series Replacement Filters, designed for superior water purification and ionization.',
      },
      products: [
        {
          name: 'Citric Acidic Cleaner System (7700/9000/9100/9200)',
          price: 34.97,
          image: '/images/Types_of_Life_Ionizer_Replacement_Filters_2.webp',
        },
        {
          name: 'Life 7700/9000/9100/9200 Filter #1',
          price: 69.97,
          image: '/images/Types_of_Life_Ionizer_Replacement_Filters_2.webp',
        },
        {
          name: 'Life 7700/9000/9100/9200 Filter #2',
          price: 69.97,
          image: '/images/Types_of_Life_Ionizer_Replacement_Filters_2.webp',
        },
      ],
    },
    accessories: {
      hero: {
        title: 'Other Accessories',
        subtitle: '(4 products)',
        description:
          'Explore useful add-ons and accessories to keep your system running smoothly and your testing simple.',
      },
      products: [
        {
          name: "25' BPA-Free Tubing (3 Foot Increments)",
          price: 3.99,
          image: '/images/water_filter.avif',
        },
        {
          name: 'Life Faucet Diverter Valve (New & Improved)',
          price: 39.97,
          image: '/images/water_filter.avif',
        },
        {
          name: 'pH Testing Kit (Drops & Chart)',
          price: 9.97,
          image: '/images/water_filter.avif',
        },
        {
          name: 'Pre Filter Wrench',
          price: 4.97,
          image: '/images/water_filter.avif',
        },
      ],
    },
  } as const;

  qualitySection = {
    title: 'Life Ionizers Filters: Enhance the Quality of Your Water',
    description:
      'At Life Ionizers, we understand that pure, clean water is essential for your health and well‑being. That’s why we offer a wide range of filters designed to work seamlessly with our water ionizers, ensuring that every drop of water you drink is filtered to perfection.',
    detail:
      'Explore our collection of high‑performance filters, each crafted to address specific water quality concerns. Whether you need to reduce chlorine, eliminate heavy metals, or remineralize your water, Life Ionizers has the perfect solution for you.',
    image: '/images/Types_of_Life_Ionizer_Replacement_Filters_2.webp',
  };

  whySection = {
    title: 'Why Choose Life Ionizer Filters?',
    description:
      'Our filters go beyond basic filtration — they provide comprehensive protection against harmful substances, ensuring that your water is clean, safe, and beneficial for your health. From reducing heavy metals and chlorine to eliminating bacteria and improving the taste of your water, Life Ionizers filters offer multiple stages of filtration for maximum purity.',
    note:
      'Each filter is specifically designed to work seamlessly with our Life Ionizer models, providing a perfect balance of high performance, ease of use, and durability.',
  };

  rangeCards = [
    {
      title: 'Life Ionizer 7500/7600/8000 Series',
      image: '/images/Types_of_Life_Ionizer_Replacement_Filters_2.webp',
      button: 'View collection',
    },
    {
      title: 'Life Ionizer 7700/9000/Next Gen Series',
      image: '/images/Types_of_Life_Ionizer_Replacement_Filters_2.webp',
      button: 'View collection',
    },
    {
      title: 'Life Ionizer M/MX/MXL Series Replacement Filters',
      image: '/images/Types_of_Life_Ionizer_Replacement_Filters_2.webp',
      button: 'View collection',
    },
    {
      title: 'Reverse Osmosis System',
      image: '/images/water_filter.avif',
      button: 'View collection',
    },
  ];

  processSection = {
    title: 'How Life Ionizer Filters Work Together',
    description:
      'Life Ionizers filters are designed to work in combination to provide multi‑stage filtration for your water. Whether you need to reduce sediment, remove chlorine, or eliminate heavy metals, each filter serves a unique purpose to improve water quality. By using multiple filters together, you can ensure that your water is free from harmful contaminants and rich in the minerals your body needs.',
    subTitle: 'Why Regular Filter Replacement is Essential',
    subDescription:
      'To maintain the high performance of your Life Ionizer, regular filter replacement is necessary. Over time, filters become saturated with contaminants and lose their effectiveness. We recommend replacing your filters according to the guidelines provided for your specific model to ensure that your water stays clean, fresh, and healthy.',
    image: '/images/water_filter.avif',
  };

  ctaSection = {
    title: 'Order Your Life Ionizer Filter Today!',
    description:
      'Enhance the quality of your drinking water and take control of your health with Life Ionizer Filters. Browse our selection of filters designed to suit every need, and enjoy pure, revitalizing water every time you drink. Trust Life Ionizers to provide the best filtration solutions for your home, office, or business.',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const collectionParam = params.get('collection') ?? 'mxl';
      this.applyCollection(collectionParam);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private applyCollection(collection: string): void {
    const normalized = collection.toLowerCase();
    const key =
      normalized.includes('7500') || normalized.includes('7600') || normalized.includes('8000')
        ? 'series7500'
        : normalized.includes('7700') || normalized.includes('9000') || normalized.includes('next')
          ? 'series7700'
          : normalized.includes('access') || normalized.includes('other')
            ? 'accessories'
            : 'mxl';

    const config = this.collections[key];
    this.hero = config.hero;
    this.products = [...config.products];
  }
}

