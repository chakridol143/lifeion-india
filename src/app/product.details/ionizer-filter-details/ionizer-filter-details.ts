import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../water-systems/product.service';

@Component({
  selector: 'app-ionizer-filter-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ionizer-filter-details.html',
  styleUrls: ['./ionizer-filter-details.css'],
})
export class IonizerFilterDetails implements OnInit {
  product: any;
  quantity = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getById(id).subscribe(res => {
      this.product = res;
    });
  }

  increaseQty() {
    this.quantity++;
  }

  decreaseQty() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
