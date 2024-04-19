import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  products: any[] = [];
  searchProductForm!: FormGroup;
  isSpinning = false;

  constructor(
    private customerService: CustomerService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.searchProductForm = this.fb.group({
      title: [null, [Validators.required]],
    });
    this.getAllProducts();
  }

  submitForm(): void {
    this.isSpinning = true;
    this.products = [];
    const title = this.searchProductForm.get('title')!.value;
    this.customerService.getProductsByTitle(title).subscribe((res) => {
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.products.push(element);
      });
      this.isSpinning = false;
    });
  }

  getAllProducts(): void {
    this.isSpinning = true;
    this.products = [];
    this.customerService.getAllProducts().subscribe((res) => {
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.products.push(element);
      });
      this.isSpinning = false;
    });
  }

  addToCart(productId: any) {
    this.customerService.addToCart(productId).subscribe((res) => {
      console.log(res);
      if (res.id != null) {
        this.snackBar.open("Product added to cart successfully", "Close", { duration: 5000 })
      } else if (res.id == null) {
        this.snackBar.open("Product already exist in the cart", "Close", { duration: 5000 })
      }
    });
  }
 
  /* addToWishlist(productId: any): void {
    this.customerService.addToWishlist(productId).subscribe(res => {
      if (res.id != null) {
        this.snackBar.open("Product added to cart successfully", "Close", { duration: 5000 });
      } else {
        this.snackBar.open("Product already exist in the cart", "Close", { duration: 5000 });
      }
    }, error => {
      console.error('Error adding product to wishlist:', error);
      this.snackBar.open("Failed to add product to cart", "Close", { duration: 5000 });
    });
  }*/
}


