import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProductsResponse {
  success: boolean;
  products: any[];
}

@Injectable({ providedIn: 'root' })
export class ProductService {

  private apiUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}
getAll() {
    return this.http.get(this.apiUrl);
  }

  // getById(id: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/${id}`);
  // }
  getById(id: number): Observable<any> {
  return this.http.get(`http://localhost:3000/api/products/${id}`);
}


getProductsByCategory(categoryId: number): Observable<ProductsResponse> {
  return this.http.get<ProductsResponse>(
    `http://localhost:3000/api/categories/${categoryId}/products`
  );
}

}
