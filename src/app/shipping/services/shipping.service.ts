import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../../login/services/loginservices';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  private apiUrl =
     'https://lifeion-backend-production.up.railway.app/api/shipping';

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) {}

  addShipping(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, {
      headers: this.buildAuthHeaders()
    });
  }

  // GET MY SHIPPING (unused)
  getMyShipping(): Observable<any> {
    return this.http.get(`${this.apiUrl}/my`, {
      headers: this.buildAuthHeaders()
    });
  }

  private buildAuthHeaders(): HttpHeaders {
    const token = this.loginService.getToken();
    if (!token) return new HttpHeaders();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }
}
