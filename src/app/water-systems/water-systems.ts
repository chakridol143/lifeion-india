import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../water-systems/category.service';
import { ProductService } from '../water-systems/product.service';
import { resolveAssetUrl } from '../config/api.config';

@Component({
  selector: 'app-water-systems',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './water-systems.html',
  styleUrl: './water-systems.css'
})
export class WaterSystems implements OnInit {

  categories: any[] = [];
  products: any[] = [];
  activeCategoryId: number | null = null;
  isWaterLoading = false;
  resolveImageUrl = resolveAssetUrl;

  mobileFiltersOpen = false;

  toggleMobileFilters(): void {
    this.mobileFiltersOpen = !this.mobileFiltersOpen;
  }

  closeMobileFilters(): void {
    this.mobileFiltersOpen = false;
  }

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.loadWaterSystems();
  }

  loadWaterSystems(): void {
    this.categoryService.getWaterSystemCategories().subscribe(res => {
      this.categories = res;

      // auto-load first category
      if (res.length > 0) {
        this.onCategoryHover(res[0].category_id);
      }
    });
  }

  onCategoryHover(categoryId: number): void {
    if (this.activeCategoryId === categoryId) return;

    this.activeCategoryId = categoryId;
    this.isWaterLoading = true;

    this.categoryService
      .getProductsByCategory(categoryId)
      .subscribe({
        next: (res) => {
          this.products = res.products ?? [];
          this.isWaterLoading = false;
          console.log('Loaded products:', this.products);
        },
        error: (err) => {
          console.error(err);
          this.products = [];
          this.isWaterLoading = false;
        }
      });
  }
}
