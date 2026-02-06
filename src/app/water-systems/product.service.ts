import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_BASE_URL } from '../config/api.config';

export interface ProductsResponse {
  success: boolean;
  products: any[];
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = `${API_BASE_URL}/api/products`;

  constructor(private http: HttpClient) {}

getAll() {
  return this.http.get<any[]>(this.apiUrl);
}
  getById(id: number): Observable<any> {
    return this.http.get(`${API_BASE_URL}/api/products/${id}`);
  }

  getProductsByCategory(categoryId: number): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(
      `${API_BASE_URL}/api/categories/${categoryId}/products`
    );
  }
}
//hello