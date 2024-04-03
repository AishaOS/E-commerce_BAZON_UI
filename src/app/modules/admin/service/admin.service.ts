import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserStorageService } from 'src/app/auth/auth-services/storage-service/user-storage.service';

const BASIC_URL = environment['BASIC_URL'];

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addCategory(categoryDto: any): Observable<any> {
    console.log(categoryDto);
    return this.http.post(`${BASIC_URL}api/admin/category`, categoryDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  addProduct(productDto: any): Observable<any> {
    return this.http.post<[]>(`${BASIC_URL}api/admin/product`, productDto, {
      headers: this.createAuthorizationHeader(),
    }).pipe(
      tap((_) => this.log('Product posted successfully')),
      catchError(this.handleError<[]>('Error posting Product', []))
    );
  }

  getProductById(productId: any): Observable<any> {
    return this.http.get<[]>(`${BASIC_URL}api/admin/product/${productId}`, {
      headers: this.createAuthorizationHeader(),
    }).pipe(
      tap((_) => this.log('Product Fetched successfully')),
      catchError(this.handleError<[]>('Error Getting Product', []))
    );
  }

  updateProduct(productId: any, productDto: any): Observable<any> {
    return this.http.put<[]>(`${BASIC_URL}api/admin/product/${productId}`, productDto, {
      headers: this.createAuthorizationHeader(),
    }).pipe(
      tap((_) => this.log('Product updated successfully')),
      catchError(this.handleError<[]>('Error updating Product', []))
    );
  }

  getAllCategories(): Observable<any> {
    return this.http.get(`${BASIC_URL}api/admin/categories`, {
      headers: this.createAuthorizationHeader(),
    });
  }

  deleteProductById(productId: any): Observable<any> {
    return this.http.delete<[]>(`${BASIC_URL}api/admin/product/${productId}`, {
      headers: this.createAuthorizationHeader(),
      observe: 'response'
    }).pipe(
      tap((_) => this.log('Product Deleted successfully')),
      catchError(this.handleError<[]>('Error Deleting Product', []))
    );
  }

  getProductsByTitle(title: any): Observable<any> {
    return this.http.get<[]>(`${BASIC_URL}api/admin/search/${title}`, {
      headers: this.createAuthorizationHeader(),
    }).pipe(
      tap((_) => this.log('Products fetched successfully')),
      catchError(this.handleError<[]>('Error getting Products', []))
    );
  }

  getAllProducts(): Observable<any> {
    return this.http.get<[]>(`${BASIC_URL}api/admin/products`, {
      headers: this.createAuthorizationHeader(),
    }).pipe(
      tap((_) => this.log('Products fetched successfully')),
      catchError(this.handleError<[]>('Error getting Products', []))
    );
  }

  getAllUsers(): Observable<any> {
    return this.http.get<[]>(`${BASIC_URL}api/admin/users`, {
      headers: this.createAuthorizationHeader(),
    }).pipe(
      tap((_) => this.log('Users fetched successfully')),
      catchError(this.handleError<[]>('Error getting users', []))
    );
  }

  deleteUserById(userId: any): Observable<any> {
    return this.http.delete<[]>(`${BASIC_URL}api/admin/user/${userId}`, {
      headers: this.createAuthorizationHeader(),
    }).pipe(
      tap((_) => this.log('User Deleted successfully')),
      catchError(this.handleError<[]>('Error Deleting user', []))
    );
  }

  getPlacedOrders(): Observable<any> {
    return this.http.get<[]>(`${BASIC_URL}api/admin/placedOrders`, {
      headers: this.createAuthorizationHeader(),
    }).pipe(
      tap((_) => this.log('Orders fetched successfully')),
      catchError(this.handleError<[]>('Error getting Orders', []))
    );
  }

  changeOrderStatus(orderId: number, status: string): Observable<any> {
    return this.http.get<[]>(`${BASIC_URL}api/admin/order/${orderId}/${status}`, {
      headers: this.createAuthorizationHeader(),
    }).pipe(
      tap((_) => this.log('Order status changed successfully')),
      catchError(this.handleError<[]>('Error changig Order status', []))
    );
  }


  addCoupon(categoryDto: any): Observable<any> {
    console.log(categoryDto);
    return this.http.post(`${BASIC_URL}api/admin/coupons`, categoryDto, {
      headers: this.createAuthorizationHeader(),
    });
  }

  getCoupons(): Observable<any> {
    return this.http.get<[]>(`${BASIC_URL}api/admin/coupons`, {
      headers: this.createAuthorizationHeader(),
    }).pipe(
      tap((_) => this.log('Category posted successfully')),
      catchError(this.handleError<[]>('Error posting Category', []))
    );
  }

  // FAQ Operation

  postFAQ(productId: number, faqDto: any): Observable<any> {
    return this.http.post<[]>(`${BASIC_URL}api/admin/faq/${productId}`, faqDto, {
      headers: this.createAuthorizationHeader(),
    }).pipe(
      tap((_) => this.log('FAQ posted successfully')),
      catchError(this.handleError<[]>('Error posting FAQ', []))
    );
  }


  getAnalytics(): Observable<any> {
    return this.http.get<[]>(`${BASIC_URL}api/admin/order/analytics`, {
      headers: this.createAuthorizationHeader(),
    }).pipe(
      tap((_) => this.log('Analytics Fetched successfully')),
      catchError(this.handleError<[]>('Error Fetching Analytics', []))
    );
  }

  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders().set(
      'Authorization',
      'Bearer ' + UserStorageService.getToken()
    );
  }

  private log(message: string): void {
    console.log(`Admin Service: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
