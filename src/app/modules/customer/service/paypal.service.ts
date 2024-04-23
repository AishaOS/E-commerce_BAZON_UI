
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const BASIC_URL = environment['BASIC_URL'];


@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  placeOrder(orderData: any): Observable<any> {
    return this.http.post<any>(`${BASIC_URL}/make/payment`, orderData);
  }

  captureOrder(orderId: string): Observable<any> {
    return this.http.post<any>(`${BASIC_URL}/complete/payment`, orderId);
  }
}
