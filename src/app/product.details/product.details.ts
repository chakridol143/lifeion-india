import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, catchError, of, switchMap, takeUntil } from 'rxjs';

import { CategoryService } from '../water-systems/category.service';
import { ProductService } from '../water-systems/product.service';
import { resolveAssetUrl } from '../config/api.config';
import { CartService } from '../cart-details/services/cartservice';

type CollectionSlug =
  | 'series-7500-7600-8000'
  | 'series-7700-9000-next-gen'
  | 'accessories'
  | 'mxl'
  | 'reverse-osmosis';

@Component({
  selector: 'app-product.details',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
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

  products: Array<{
    product_id: number;
    name: string;
    price: number | null;
    badge?: string;
    image: string;
    menu_type_id?: number;
  }> = [];

  private readonly collectionMeta: Record<
    CollectionSlug,
    { hero: { title: string; subtitle: string; description: string } }
  > = {
    'reverse-osmosis': {
      hero: {
        title: 'Reverse Osmosis Systems',
        subtitle: '(0 products)',
        description:
          'Pure, mineral-rich water from compact under-counter RO systems with optional UV and remineralization stages.',
      },
    },
    'mxl': {
      hero: {
        title: 'Life Ionizer M/MX/MXL Series Filters',
        subtitle: '(0 products)',
        description:
          'Experience the Life Ionizer M, MX, and MXL Series Replacement Filters, designed for powerful water ionization and filtration.',
      },
    },
    'series-7500-7600-8000': {
      hero: {
        title: 'Life Ionizer 7500/7600/8000 Series',
        subtitle: '(0 products)',
        description:
          'Experience the Life Ionizer 7500, 7600, and 8000 Series Replacement Filters, designed for powerful water ionization and filtration.',
      },
    },
    'series-7700-9000-next-gen': {
      hero: {
        title: 'Life Ionizer 7700/9000/Next Gen Series',
        subtitle: '(0 products)',
        description:
          'Discover the Life Ionizer 7700, 9000, and Next Gen Series Replacement Filters, designed for superior water purification and ionization.',
      },
    },
    'accessories': {
      hero: {
        title: 'Other Accessories',
        subtitle: '(0 products)',
        description:
          'Explore useful add-ons and accessories to keep your system running smoothly and your testing simple.',
      },
    },
  };

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

  private readonly fallbackProducts: Partial<Record<
    CollectionSlug,
    Array<{ product_id: number; name: string; price: number; image: string; menu_type_id: number }>
  >> = {
    'accessories': [
      {
        product_id: 8001,
        name: '.25″ BPA-Free Tubing (3 Foot Increments)',
        price: 3.99,
        image: 'https://lifeionizers.com/cdn/shop/files/sku_419781_1.jpg?v=1729123626',
        menu_type_id: 1,
      },
      {
        product_id: 8002,
        name: 'Life Faucet Diverter Valve (New & Improved)',
        price: 39.97,
        image: 'https://lifeionizers.com/cdn/shop/files/LC-11-Diverter-Vavle.jpg?v=1729124026',
        menu_type_id: 1,
      },
      {
        product_id: 8003,
        name: 'pH Testing Kit (Drops & Chart)',
        price: 9.97,
        image: 'https://lifeionizers.com/cdn/shop/files/Ph-TestKit-1.jpg?v=1729123699',
        menu_type_id: 1,
      },
      {
        product_id: 8004,
        name: 'Pre Filter Wrench',
        price: 4.97,
        image: 'https://lifeionizers.com/cdn/shop/files/Pre-Filter-Wrench.jpg?v=1729111060',
        menu_type_id: 1,
      },
    ],
  };

  private readonly defaultProductImage = '/images/Types_of_Life_Ionizer_Replacement_Filters_2.webp';

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const collectionParam = params.get('collection');
      const slug = this.normalizeCollectionParam(collectionParam);

      this.applyCollectionMeta(slug);
      this.loadProductsForCollection(slug);
      this.detectChangesSafe();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private normalizeCollectionParam(collection: string | null): CollectionSlug {
    const normalized = (collection ?? '').toLowerCase();
    if (normalized.includes('7500') || normalized.includes('7600') || normalized.includes('8000')) {
      return 'series-7500-7600-8000';
    }
    if (normalized.includes('7700') || normalized.includes('9000') || normalized.includes('next')) {
      return 'series-7700-9000-next-gen';
    }
    if (normalized.includes('access')) {
      return 'accessories';
    }
    if (normalized.includes('osmosis') || normalized.includes('ro')) {
      return 'reverse-osmosis';
    }
    return 'mxl';
  }

  private getIonizerCollectionSlug(name?: string): CollectionSlug {
    const normalized = (name ?? '').toLowerCase();
    if (normalized.includes('7500') || normalized.includes('7600') || normalized.includes('8000')) {
      return 'series-7500-7600-8000';
    }
    if (normalized.includes('7700') || normalized.includes('9000') || normalized.includes('next')) {
      return 'series-7700-9000-next-gen';
    }
    if (normalized.includes('access')) {
      return 'accessories';
    }
    if (normalized.includes('osmosis') || normalized.includes('ro')) {
      return 'reverse-osmosis';
    }
    return 'mxl';
  }

  private applyCollectionMeta(slug: CollectionSlug): void {
    const config = this.collectionMeta[slug];
    this.hero = { ...config.hero };
  }

  private loadProductsForCollection(slug: CollectionSlug): void {
    this.products = [];
    this.hero.subtitle = '(0 products)';
    this.detectChangesSafe();

    this.categoryService
      .getIonizerFilterCategories()
      .pipe(
        takeUntil(this.destroy$),
        catchError(() => of([])),
        switchMap(categories => {
          const match = categories.find(cat => this.getIonizerCollectionSlug(cat.name) === slug);
          if (!match) {
            this.hero.subtitle = '(0 products)';
            return of({ products: [] });
          }

          this.hero = {
            ...this.hero,
            title: match.name || this.hero.title,
            description: match.description || this.hero.description,
          };

          return this.productService.getProductsByCategory(match.category_id).pipe(
            catchError(() => of({ products: [] }))
          );
        })
      )
      .subscribe(res => {
        const items = res?.products ?? [];
        this.products = items.map((product: any) => ({
          product_id: product.product_id,
          name: product.name,
          price: this.coercePrice(product.price),
          image: this.resolveProductImage(product.image_url),
          menu_type_id: product.menu_type_id,
        }));

        if (!this.products.length && this.fallbackProducts[slug]?.length) {
          this.products = [...(this.fallbackProducts[slug] as any[])];
        }

        this.hero.subtitle = `(${this.products.length} products)`;
        this.detectChangesSafe();
      });
  }

  goToProduct(product: any): void {
    if (!product?.product_id) return;

    if (product.menu_type_id === 2) {
      this.router.navigate(['/product/water-system', product.product_id]);
      return;
    }

    this.router.navigate(['/product/ionizer', product.product_id]);
  }

  addToCart(product: any): void {
    if (!product?.product_id) return;

    this.cartService.addToCart({
      product_id: product.product_id,
      name: product.name,
      price: product.price,
      image_url: product.image,
      quantity: 1,
      menu_type_id: product.menu_type_id
    });
  }

  handleImageError(product: { image: string }): void {
    if (!product) return;
    product.image = this.defaultProductImage;
  }

  private coercePrice(value: unknown): number | null {
    if (value === null || value === undefined || value === '') return null;
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : null;
  }

  private resolveProductImage(imageUrl: unknown): string {
    if (imageUrl === null || imageUrl === undefined || imageUrl === '') {
      return this.defaultProductImage;
    }

    if (typeof imageUrl === 'string') {
      const trimmed = imageUrl.trim().toLowerCase();
      if (!trimmed || trimmed === 'null' || trimmed === 'undefined') {
        return this.defaultProductImage;
      }
    }

    const resolved = resolveAssetUrl(String(imageUrl));
    return resolved || this.defaultProductImage;
  }

  /**
   * Manually triggers change detection when running without Zone.js.
   * Safe-guards against errors if the view is already destroyed.
   */
  private detectChangesSafe(): void {
    try {
      this.cdr.detectChanges();
    } catch {
      // no-op
    }
  }
}

