import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../water-systems/product.service';

@Component({
  selector: 'app-ionizer-filter-details',
  imports: [],
  templateUrl: './ionizer-filter-details.html',
  styleUrl: './ionizer-filter-details.css',
})
export class IonizerFilterDetails implements OnInit {
  product: any;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      console.error('Invalid product id');
      return;
    }

    this.productService.getById(id).subscribe({
      next: (res) => {
        this.product = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load product', err);
        this.loading = false;
      }
    });
  }
}