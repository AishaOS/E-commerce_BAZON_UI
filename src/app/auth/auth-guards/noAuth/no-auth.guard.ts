import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserStorageService } from '../../auth-services/storage-service/user-storage.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    if(UserStorageService.hasToken() && UserStorageService.isCustomerLoggedIn()){
      this.router.navigateByUrl('/customer/dashboard');
      return false;
    }
    else if (UserStorageService.hasToken() && UserStorageService.isAdminLoggedIn()){
      this.router.navigateByUrl('/admin/dashboard');
      return false;
    }
    return true;
  }
  
  
}