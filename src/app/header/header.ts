import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoryService, Category, Product } from '../water-systems/category.service';
import { ProductService } from '../water-systems/product.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {

  /* ===== MEGA MENU DATA ===== */
  showMegaMenu = false;
    categories: Category[] = [];
 products: Product[] = [];
 activeCategoryId: number | null = null;

 
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
    private router: Router
    
  ) {}
navItems = [
  { label: 'Home', route: '/', submenu: null },

 {
  label: 'Water Systems',
  route: null,
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



 
goToProduct(id: number): void {
  console.log('Navigating to product:', id);

  this.showMegaMenu = false;

  this.router.navigate(['/product', id]);
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
ngOnInit() {
    this.categoryService.getAllCategories().subscribe(res => {
      this.categories = res;
    });
  }

  onDropdownHover() {
    this.showMegaMenu = true;
  }

  onDropdownLeave() {
    this.showMegaMenu = false;
    this.products = [];
  }
// onCategoryHover(categoryId: number): void {

  
//   if (this.activeCategoryId === categoryId) return;

//   this.activeCategoryId = categoryId;

//   this.productService
//     .getProductsByCategory(categoryId)
//     .subscribe(res => {
//       this.products = res.products;
//     });
// }
// onCategoryHover(categoryId: number): void {
//   console.log('Hovered category:', categoryId);

//   if (this.activeCategoryId === categoryId) return;
//   this.activeCategoryId = categoryId;

//   this.productService.getProductsByCategory(categoryId)
//     .subscribe(res => {
//       console.log('API response:', res);
//       this.products = res.products;
//     });
// }
onCategoryHover(categoryId: number): void {

  // prevent repeated calls
  if (this.activeCategoryId === categoryId) return;
  this.activeCategoryId = categoryId;

  this.productService
    .getProductsByCategory(categoryId)
    .subscribe((res: any) => {
      console.log('API response:', res);
      this.products = Array.isArray(res) ? res : res.products;
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


}
