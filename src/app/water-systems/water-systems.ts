import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from  '../water-systems/category.service';
import { ProductService } from '../water-systems/product.service';

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
  showWaterSystems = false;

  hoveredCategoryId: number | null = null;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(res => {
      this.categories = res;
    });
  }

 onCategoryHover(categoryId: number): void {
  this.activeCategoryId = categoryId;
  this.onCategoryHover(this.categories[0].category_id);


  this.productService
    .getProductsByCategory(categoryId)
    .subscribe({
      next: (res) => {
        this.products = res.products;
      },
      error: (err) => {
        console.error('Product fetch error', err);
        this.products = [];
      }
    });
}
}
