import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductService } from '../../water-systems/product.service';
import { CartService } from '../../cart-details/services/cartservice';
import { ASSETS_BASE_URL } from '../../config/api.config';

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
  startIndex = 0;
  visibleCount = 4;
  activeId: number | null = null;
  assetsBaseUrl = ASSETS_BASE_URL;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
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

  hotspots = [
    {
      id: 1,
      top: 29,
      left: 29,
      title: '7500/7600/8000 Series',
      desc: 'Enhancing ionization, removing fluoride, chlorine, and industrial contaminants.',
    },
    {
      id: 2,
      top: 39,
      left: 39,
      title: 'Filter #2',
      desc: 'Replace every 1,000 gallons or 12 months, whichever comes first.',
    },
    {
      id: 3,
      top: 49,
      left: 49,
      title: 'Citric Acid Cleaning Cartridge',
      desc: 'Clean your chamber & plates every 4 months (2 users) & at 3 months for 3 or more users.',
    },
    {
      id: 4,
      top: 58,
      left: 58,
      title: 'Filter #1',
      desc: 'Replace every 600 gallons or 8 months, whichever comes first.',
    },
    {
      id: 5,
      top: 58,
      left: 72,
      title: '7700/9000/Next Gen Series',
      desc: 'Dual-stage filtration for eliminating pharmaceuticals, lead, and bacteria.',
    },
  ];

  toggle(id: number) {
    this.activeId = this.activeId === id ? null : id;
  }

  addToCart() {
    if (!this.product) return;

    this.cartService.addToCart({
      product_id: this.product.product_id,
      name: this.product.name,
      price: this.product.price,
      image_url: this.product.image_url,
      quantity: this.quantity,
    });
  }
}
