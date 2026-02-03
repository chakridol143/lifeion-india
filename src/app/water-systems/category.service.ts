import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { ProductsResponse } from './product.service';
import { API_BASE_URL } from '../config/api.config';

export interface Product {
  product_id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
}

export interface Category {
  category_id: number;
  name: string;
  description?: string;
  image_url?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = `${API_BASE_URL}/api/categories`;

  private categorySubject = new Subject<number>();
  categorySelected$ = this.categorySubject.asObservable();

  constructor(private http: HttpClient) {}

  selectCategory(id: number) {
    this.categorySubject.next(id);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  getProductsByCategory(categoryId: number): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(
      `${API_BASE_URL}/api/categories/${categoryId}/products`
    );
  }

  getIonizerFilterCategories() {
    return this.http.get<any[]>(`${API_BASE_URL}/api/categories/menu/1`);
  }

  getWaterSystemCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${API_BASE_URL}/api/categories/menu/2`);
  }
}
