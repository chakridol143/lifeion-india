import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  private apiUrl =
    'https://lifeion-backend-production.up.railway.app/api/shipping';

  constructor(private http: HttpClient) {}

  addShipping(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getShippingByUser(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }
}

