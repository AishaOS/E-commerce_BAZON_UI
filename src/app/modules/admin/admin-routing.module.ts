import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminGuard } from 'src/app/auth/auth-guards/authAdmin/admin.guard';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { PostProductComponent } from './components/post-product/post-product.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PostCouponComponent } from './components/post-coupon/post-coupon.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { PostProductFaqComponent } from './components/post-product-faq/post-product-faq.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard] },
  { path: 'category', component: PostCategoryComponent, canActivate: [AdminGuard] },
  { path: 'product', component: PostProductComponent, canActivate: [AdminGuard] },
  { path: 'product/:productId', component: UpdateProductComponent, canActivate: [AdminGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [AdminGuard] },
  { path: 'post-coupon', component: PostCouponComponent, canActivate: [AdminGuard] },
  { path: 'coupons', component: CouponsComponent, canActivate: [AdminGuard] },
  { path: 'faq/:productId', component: PostProductFaqComponent, canActivate: [AdminGuard] },
  { path: 'analytics', component: AnalyticsComponent, canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
