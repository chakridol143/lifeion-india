import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoryService, Category, Product } from '../water-systems/category.service';
import { ProductService } from '../water-systems/product.service';
import { ASSETS_BASE_URL, resolveAssetUrl } from '../config/api.config';
// import { ASSETS_BASE_URL } from '../config/api.config';
import { CartService } from '../cart-details/services/cartservice';
import { CartDetails } from '../cart-details/cart-details';
import { LoginService } from '../login/services/loginservices';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, CartDetails],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  assetsBaseUrl = ASSETS_BASE_URL;

  /* ===== MEGA MENU DATA ===== */
  showMegaMenu = false;
    categories: Category[] = [];
 products: Product[] = [];
 activeCategoryId: number | null = null;
 isIonizerLoading = false;
 waterSystemCategories: Category[] = [];
user: any = null;



 
  showWaterSystems = false;

  /* ===== SEARCH ===== */
  searchOpen = false;
  overlaySearch = '';

  /* ===== MOBILE MENU ===== */
  menuOpen = false;
  activeDropdown: string | null = null;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private cart: CartService,
    private auth: LoginService
    
  ) {}
navItems = [
  { label: 'Home', route: '/', submenu: null },

 {
  label: 'Water Systems',
  route: "/water-systems",
  submenu: null, 
},

  { label: 'Comparison', route: '/comparison', submenu: null },

  {
    label: 'Learn',
    route: null,
    submenu: [
      { label: 'Studies', route: '/learn/studies' },
      { label: 'Videos', route: '/learn/videos' },
      { label: 'Blog', route: '/learn/blog' },
      { label: 'Support', route: '/support' },
      { label: 'Free Water Report', route: '/learn/free-water-report' },
    ],
  },

  {
    label: 'Testimonials',
    route: null,
    submenu: [
      { label: 'Satisfied Customers', route: '/customers' },
      { label: 'Health Care Professionals', route: '/healthcare' },
      { label: 'Actors & Musicians', route: '/actors' },
      { label: 'Professional Athletes', route: '/athletes' },
    ],
  },

  { label: 'Finance', route: '/finance', submenu: null },

  {
    label: 'About Us',
    route: null,
    submenu: [{ label: 'Contact', route: '/contact' }],
  },

  {
    label: 'Support',
    route: null,
    submenu: [
      { label: 'Certifications', route: '/support/certifications' },
      { label: 'Our Company', route: '/support/our-company' },
      { label: 'Water FACTS', route: '/support/water-facts' },
      { label: 'Business Opportunities', route: '/support/business-opportunities' },
    ],
  },
];
onNavClick(): void {
  this.closeMenu();
}


// goToProduct(product: any): void {

//   this.showMegaMenu = false;
//   this.showIonizerMenu = false;

//   const menuTypeId = Number(product.menu_type_id);

//   if (menuTypeId === 1) {
//     this.router.navigate(['/product/ionizer/:id', product.product_id]);
//     return;
//   }

  
//   if (menuTypeId === 2) {
//     this.router.navigate(['/product/water-system/:id', product.product_id]);
//     return;
//   }

//   // Accessories / Others
//   this.router.navigate(['/product', product.product_id]);
// }

goToProduct(product: any): void {
  if (!product?.product_id || !product?.menu_type_id) {
    console.warn('Not a product click, ignoring:', product);
    return;
  }

  if (product.menu_type_id === 1) {
    this.router.navigate(['/product/ionizer', product.product_id]);
    return;
  }

  if (product.menu_type_id === 2) {
    this.router.navigate(['/product/water-system', product.product_id]);
    return;
  }

  console.error('Unknown product menu type', product);
}





  /* ===== SEARCH ===== */
  openSearch() { this.searchOpen = true; }
  closeSearch() { this.searchOpen = false; this.overlaySearch = ''; }

  /* ===== MOBILE ===== */
  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; this.activeDropdown = null; }
  toggleDropdown(label: string) {
    this.activeDropdown = this.activeDropdown === label ? null : label;
  }
  performSearch(): void {
  if (this.overlaySearch.trim()) {
    console.log('Searching:', this.overlaySearch);
    this.closeSearch();
  }
}
// ngOnInit() {
//     this.categoryService.getAllCategories().subscribe(res => {
//       this.categories = res;
//     });
//   }

ngOnInit() {
  this.cart.cart$.subscribe(items => {
    this.items = items;
    this.cartCount = items.length;
  });

  this.categoryService.getAllCategories().subscribe(res => {
    this.categories = res;
  });

  this.auth.userState$.subscribe(user => {
    this.user = user;
  });
}
/* ===== WATER SYSTEMS ===== */


onDropdownHover(): void {
  this.showMegaMenu = true;

  if (this.waterSystemCategories.length === 0) {
    this.categoryService.getWaterSystemCategories().subscribe(res => {
      this.waterSystemCategories = res;
      this.categories = res;

      if (res.length > 0) {
        this.onCategoryHover(res[0].category_id);
      }
    });
  } else {
    this.categories = this.waterSystemCategories;
  }
}



onDropdownLeave(): void {
  this.showMegaMenu = false;
  this.products = [];
  this.activeCategoryId = null;
}
// onCategoryHover(categoryId: number): void {
//   if (this.activeCategoryId === categoryId) return;

//   this.activeCategoryId = categoryId;

//   this.productService
//     .getProductsByCategory(categoryId)
//     .subscribe({
//       next: (res: any) => {
//         console.log('Water Systems API response:', res);
//         this.products = res?.products ?? [];
//       },
//       error: (err) => {
//         console.error(err);
//         this.products = [];
//       }
//     });
// }

onCategoryHover(categoryId: number): void {
  if (this.activeCategoryId === categoryId) return;

  this.activeCategoryId = categoryId;

  this.productService
    .getProductsByCategory(categoryId)
    .subscribe(res => {
      this.products = res?.products ?? [];
    });
}



  hasSubmenu(item: any): boolean {
    return Array.isArray(item.submenu) && item.submenu.length > 0;
  }
  onWaterSystemsEnter() {
    this.showWaterSystems = true;
  }

  onWaterSystemsLeave() {
    this.showWaterSystems = false;
  }

/* ===== IONIZER FILTERS ===== */
ionizerCategories: Category[] = [];
  ionizerProducts: Product[] = [];
  activeIonizerCategoryId: number | null = null;
  showIonizerMenu = false;
  ionizerProductsMap: { [categoryId: number]: Product[] } = {};
  private ionizerCloseTimeout: ReturnType<typeof setTimeout> | null = null;


loadIonizerFilters(): void {
  this.categoryService
    .getIonizerFilterCategories()
    .subscribe(res => {
      this.ionizerCategories = res;

      if (res.length > 0) {
        this.onIonizerCategoryHover(res[0].category_id);
      }
    });
}

onIonizerHover(): void {
  this.showIonizerMenu = true;

  // Load once
  if (this.ionizerCategories.length === 0) {
    this.categoryService.getIonizerFilterCategories().subscribe(cats => {
      this.ionizerCategories = cats;

      cats.forEach(cat => {
        this.productService
          .getProductsByCategory(cat.category_id)
          .subscribe(res => {
            this.ionizerProductsMap[cat.category_id] = res.products || [];
          });
      });
    });
  }
}

onIonizerLeave(): void {
  this.showIonizerMenu = false;
}

closeIonizerMenu(): void {
  this.showIonizerMenu = false;
}

  onIonizerEnter(): void {
    if (this.ionizerCloseTimeout) {
      clearTimeout(this.ionizerCloseTimeout);
      this.ionizerCloseTimeout = null;
    }
    this.showIonizerMenu = true;

    if (this.ionizerCategories.length === 0) {
      this.categoryService.getIonizerFilterCategories().subscribe(cats => {
        this.ionizerCategories = cats;

      cats.forEach(cat => {
        this.productService
          .getProductsByCategory(cat.category_id)
          .subscribe(res => {
            this.ionizerProductsMap[cat.category_id] = res.products || [];
          });
      });
    });
    }
  }


//   onIonizerLeave(): void {
//   this.ionizerCloseTimeout = setTimeout(() => {
//     this.showIonizerMenu = false;
//     this.ionizerProducts = [];            
//     this.activeIonizerCategoryId = null;
//   }, 150);
// }

//   closeIonizerMenu(): void {
//     if (this.ionizerCloseTimeout) {
//       clearTimeout(this.ionizerCloseTimeout);
//       this.ionizerCloseTimeout = null;
//     }
//     this.showIonizerMenu = false;
//     this.ionizerProducts = [];
//     this.activeIonizerCategoryId = null;
//   }

  getIonizerCollectionSlug(name: string | undefined): string {
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
    return 'mxl';
  }

  resolveImageUrl(imageUrl?: string): string {
    return resolveAssetUrl(imageUrl);
  }

onIonizerCategoryHover(categoryId: number): void {
  if (this.activeIonizerCategoryId === categoryId) return;

  this.activeIonizerCategoryId = categoryId;
  this.isIonizerLoading = true;

  this.productService
    .getProductsByCategory(categoryId)
    .subscribe(res => {
      this.ionizerProducts = res.products || [];
      this.isIonizerLoading = false;
    });
}

@Input() cartCount: number = 0;
   @Input() items: any[] = [];
showCartPopup = false;

 toggleCartDetails() {
    this.showCartPopup = !this.showCartPopup;
  }

   closeDetails() {
    this.showCartPopup = false;
  }

  // cartItemRemove(index: number) {
  //   const token = sessionStorage.getItem('token') ?? undefined;
  //   const user = JSON.parse(sessionStorage.getItem('user') || '{}');
  //   const user_Id = user.user_id || user.id;
  //   this.cart.removeFromCart(index, user_Id, token);
  // }

  cartItemRemove(index: number) {
    const token = sessionStorage.getItem('token') ?? undefined;
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    const user_Id = user.user_id || user.id;
    this.cart.removeFromCart(index, user_Id, token);
  }
  
   handleClear() {
    this.cart.clearCart();
  }
    
goToLogin(): void {
  this.router.navigate(['/login']);
}

logoutUser(): void {
  this.auth.logout();
  this.user = null;
  this.router.navigate(['/']);
}

  
}
