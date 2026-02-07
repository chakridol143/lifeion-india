import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { resolveAssetUrl } from '../config/api.config';
import { CartService } from '../cart-details/services/cartservice';

interface ROProduct {
  product_id: number;
  name: string;
  price: number;
  subtitle?: string;
  badges?: string[];
  image: string;
  menu_type_id?: number;
}

@Component({
  selector: 'app-reverse-osmosis',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './reverse-osmosis.html',
  styleUrl: './reverse-osmosis.css',
})
export class ReverseOsmosisComponent {
  constructor(private cartService: CartService) {}

  hero = {
    title: 'Reverse Osmosis System',
    subtitle: '',
    description:
      'Advanced multi-stage RO systems that strip impurities, then (optionally) remineralize for crisp, balanced, mineral-rich water.',
  };

  toolbar = {
    sortOptions: [
      'Featured',
      'Alphabetically, A-Z',
      'Alphabetically, Z-A',
      'Price, low to high',
      'Price, high to low',
      'Date, new to old',
      'Date, old to new',
    ],
    activeSort: 'Featured',
  };

  products: ROProduct[] = [
    { product_id: 9001, name: '3 Stage Reverse Osmosis System', price: 399, image: 'reverseosmosis.webp', menu_type_id: 1 },
    { product_id: 9002, name: '5 Stage Reverse Osmosis System', price: 599, image: 'reverseosmosis.webp', menu_type_id: 1 },
    {
      product_id: 9003,
      name: '5 Stage RO with Mineral Cartridge & Housing',
      price: 599,
      image: 'reverseosmosis.webp',
      menu_type_id: 1
    },
    { product_id: 9004, name: '6 Stage RO with UV Lamp', price: 699, image: 'reverseosmosis.webp', menu_type_id: 1 },
    {
      product_id: 9005,
      name: '6 Stage RO with Mineral Cartridge & Housing',
      price: 799,
      image: 'reverseosmosis.webp',
      menu_type_id: 1
    },
    { product_id: 9006, name: 'Life Reverse Osmosis Post Filter™', price: 37.97, image: 'reverseosmosis.webp', menu_type_id: 1 },
  ];

  features = [
    {
      title: 'High-Capacity Purification',
      desc: 'Many systems produce up to 50 gallons of purified water per day—enough for families and small offices.',
      icon: 'https://img.icons8.com/ios-filled/100/FFFFFF/filter.png'
    },
    {
      title: 'Compact Design',
      desc: 'Under-counter friendly layout keeps the counter clear while delivering premium water at the faucet.',
      icon: 'https://img.icons8.com/ios-filled/100/FFFFFF/in-transit.png'
    },
    {
      title: 'Durable Construction',
      desc: 'Heavy-duty stainless or powder-coated brackets with quality housings for long-term reliability.',
      icon: 'https://img.icons8.com/ios-filled/100/FFFFFF/wrench.png'
    },
    {
      title: 'Complete Installation Kits',
      desc: 'Includes pre-filters, post-filters, storage tank, faucet, and hardware for a hassle-free setup.',
      icon: 'https://img.icons8.com/ios-filled/100/FFFFFF/box.png'
    },
  ];

  steps = [
    { title: 'Pre-Filtration', desc: 'Removes sediment, dirt, and rust to protect the RO membrane.' },
    { title: 'Carbon Filtration', desc: 'Eliminates chlorine, odors, and chemicals to improve taste and protect the membrane.' },
    { title: 'Reverse Osmosis Membrane', desc: 'Forces water through a semi-permeable membrane, filtering heavy metals, bacteria, and viruses.' },
    { title: 'Post-Filtration', desc: 'Final polish ensures any remaining impurities are removed for crisp, clean water.' },
    { title: 'Optional Features', desc: 'Mineral cartridges reintroduce calcium/magnesium; UV lamps add disinfection for extra safety.' },
  ];

  audience = [
    'Families: Safe, clean water for every member.',
    'Health enthusiasts: Enjoy the benefits of alkalized, ionized water when paired with mineral cartridges.',
    'Offices: Provide staff with fresh, purified drinking water.',
    'Low-pressure homes: Choose models that perform even under lower inlet pressure.',
  ];

  resolveImage(url: string): string {
    return resolveAssetUrl(url) || '/images/water_filter.avif';
  }

  addToCart(product: ROProduct): void {
    if (!product?.product_id) return;

    this.cartService.addToCart({
      product_id: product.product_id,
      name: product.name,
      price: product.price,
      image_url: this.resolveImage(product.image),
      quantity: 1,
      menu_type_id: product.menu_type_id ?? 1
    });
  }
}
