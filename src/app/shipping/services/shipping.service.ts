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
    // 'http://localhost:3000/api/shipping';

  constructor(
    private http: HttpClient,
    private loginService: LoginService   
  ) {}

  // ✅ ADD SHIPPING (JWT protected)
  addShipping(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, {
      headers: this.getAuthHeaders()
    });
  }

  // ✅ GET MY SHIPPING (JWT protected)
  getMyShipping(): Observable<any> {
    return this.http.get(`${this.apiUrl}/my`, {
      headers: this.getAuthHeaders()
    });
  }

  // 🔐 Common auth header
  // private getAuthHeaders(): HttpHeaders {
  //   const token = this.loginService.getToken();
  //   return new HttpHeaders({
  //     Authorization: `Bearer ${token}`
  //   });
  // }
  private getAuthHeaders(): HttpHeaders {
  const token = this.loginService.getToken();

  if (!token) {
    throw new Error('JWT token missing – user not logged in');
  }

  return new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
}

}
