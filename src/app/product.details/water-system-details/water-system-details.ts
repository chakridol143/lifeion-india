import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../water-systems/product.service';
import { resolveAssetUrl } from '../../config/api.config';
import { CartService } from '../../cart-details/services/cartservice';
import { CurrencyDisplayPipe } from '../../shared/currency-display.pipe';


@Component({
  selector: 'app-water-system-details',
  standalone: true,
  imports: [CommonModule, CurrencyDisplayPipe],
  templateUrl: './water-system-details.html',
  styleUrl: './water-system-details.css',
})
export class WaterSystemDetails implements OnInit {

  product: any;
  images: string[] = [];
  selectedImage = '';
  resolveImageUrl = resolveAssetUrl;
  
  currentIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
     private cdr: ChangeDetectorRef
  ) {}
zoomStyle = 'scale(1)';

onZoom(event: MouseEvent) {
  const target = event.target as HTMLElement;
  const rect = target.getBoundingClientRect();

  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;

  this.zoomStyle = `scale(2) translate(${-x / 2}%, ${-y / 2}%)`;
}

resetZoom() {
  this.zoomStyle = 'scale(1)';
}

//   ngOnInit(): void {
//   const id = Number(this.route.snapshot.paramMap.get('id'));

//   this.productService.getById(id).subscribe((res: any) => {
//     this.product = res;

//     // collect all images from backend
//     this.images = Object.keys(res)
//       .filter(key => key.startsWith('image_url'))
//       .map(key => res[key])
//       .filter(img => img && img.trim() !== '');

//     this.selectedImage = this.images[0];
//     this.currentIndex = 0;
//   });
// }

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id = Number(params.get('id'));

    if (id) {
      // reset state
      this.product = null;
      this.images = [];
      this.selectedImage = '';
      this.currentIndex = 0;

      this.productService.getById(id).subscribe((res: any) => {
        this.product = res;

        // collect all images from backend
        this.images = Object.keys(res)
          .filter(key => key.startsWith('image_url'))
          .map(key => res[key])
          .filter(img => img && img.trim() !== '');

        this.selectedImage = this.images[0];
        this.currentIndex = 0;

        this.cdr.detectChanges(); 
      });
    }
    console.log('Water system product ID:', id);

  });
}


selectImage(img: string, index: number) {
  this.selectedImage = img;
  this.currentIndex = index;
}

addToCart() {
  if (!this.product) return;

  this.cartService.addToCart({
    product_id: this.product.product_id,
    name: this.product.name,
    price: this.product.price,
    image_url: this.product.image_url || this.selectedImage,
    quantity: 1
  });
}

}

