import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../service/admin.service';

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
    private adminService: AdminService,
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
    this.adminService.getProductsByTitle(title).subscribe((res) => {
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
    this.adminService.getAllProducts().subscribe((res) => {
      console.log(res);
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.products.push(element);
      });
      console.log(this.products);
      this.isSpinning = false;
    });
  }

  deleteProduct(productId: any): void {
    this.adminService.deleteProductById(productId).subscribe((res) => {
      if (res.body == null) {
        this.snackBar.open('Product Deleted Successfully!', 'Close', {
          duration: 5000
        });
        this.getAllProducts();
      } else {
        this.snackBar.open(res.message, 'Close', {
          duration: 5000,
          panelClass: 'error-snackbar'
        });
      }
    });
  }
}
