import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

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
  providedIn: 'root'
})
export class CategoryService {

  // ✅ FIXED: http (NOT https)
  private apiUrl = 'http://localhost:3000/api/categories';

  private categorySubject = new Subject<number>();
  categorySelected$ = this.categorySubject.asObservable();

  constructor(private http: HttpClient) {}

  selectCategory(id: number) {
    this.categorySubject.next(id);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

 getProductsByCategory(categoryId: number) {
  return this.http.get<{ success: boolean; products: any[] }>(
    `${this.apiUrl}/${categoryId}/products`
  );
}

  }

