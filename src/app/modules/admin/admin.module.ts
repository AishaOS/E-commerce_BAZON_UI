import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { PostProductComponent } from './components/post-product/post-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { OrdersComponent } from './components/orders/orders.component';
import { DemoAngularMaterailModule } from 'src/app/DemoAngularMaterialModule';
import { PostCouponComponent } from './components/post-coupon/post-coupon.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { PostProductFaqComponent } from './components/post-product-faq/post-product-faq.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { OrderByStatusComponent } from './components/analytics/order-by-status/order-by-status.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PostCategoryComponent,
    PostProductComponent,
    UpdateProductComponent,
    OrdersComponent,
    PostCouponComponent,
    CouponsComponent,
    PostProductFaqComponent,
    AnalyticsComponent,
    OrderByStatusComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DemoAngularMaterailModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
