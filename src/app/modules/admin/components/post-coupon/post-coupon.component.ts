import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-post-coupon',
  templateUrl: './post-coupon.component.html',
  styleUrls: ['./post-coupon.component.scss']
})
export class PostCouponComponent {

  isSpinning = false;
  categoryForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: [null, [Validators.required]],
      code: [null, [Validators.required]],
      discount: [null, [Validators.required]],
      expirationDate: [null, [Validators.required]],
    });
  }


  addCategory(): void {
    if (this.categoryForm.valid) {
      this.isSpinning = true;
      this.adminService.addCoupon(this.categoryForm.value).subscribe((res) => {
        this.isSpinning = false;
        if (res.id != null) {
          this.snackBar.open('Coupon Posted Successfully!', 'Close', {
            duration: 5000
          });
          this.router.navigateByUrl('/admin/dashboard');
        } else {
          this.snackBar.open(res.message, 'Close', {
            duration: 5000,
            panelClass: 'error-snackbar'
          });
        }
      }, error => {
        console.log(error)
        this.isSpinning = false;
        this.snackBar.open(error.error, 'Close', {
          duration: 5000
        });
      });
    } else {
      this.categoryForm.markAllAsTouched();
    }
  }
}


