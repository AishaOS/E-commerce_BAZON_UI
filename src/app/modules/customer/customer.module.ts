import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoAngularMaterailModule } from 'src/app/DemoAngularMaterialModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerRoutingModule } from './customer-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MyPlaceOrdersComponent } from './components/my-place-orders/my-place-orders.component';
import { OrderPlaceComponent } from './components/order-place/order-place.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ReviewOrderedProductComponent } from './components/review-ordered-product/review-ordered-product.component';
import { ViewCompleteProductDetailComponent } from './components/view-complete-product-detail/view-complete-product-detail.component';
import { ViewOrderedProductsForReviewComponent } from './components/view-ordered-products-for-review/view-ordered-products-for-review.component';
import { GetMyWishlistComponent } from './components/get-my-wishlist/get-my-wishlist.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CartItemsComponent,
    ProfileComponent,
    MyPlaceOrdersComponent,
    OrderPlaceComponent,
    ChangePasswordComponent,
    ViewOrderedProductsForReviewComponent,
    ReviewOrderedProductComponent,
    ViewCompleteProductDetailComponent,
    GetMyWishlistComponent
    ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    DemoAngularMaterailModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class CustomerModule { }
