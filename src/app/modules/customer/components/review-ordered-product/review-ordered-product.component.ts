import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { UserStorageService } from 'src/app/auth/auth-services/storage-service/user-storage.service';

@Component({
  selector: 'app-review-ordered-product',
  templateUrl: './review-ordered-product.component.html',
  styleUrls: ['./review-ordered-product.component.scss']
})
export class ReviewOrderedProductComponent {

  productId: number = this.activatedRoute.snapshot.params["productId"];
  isSpinning: boolean = false;
  reviewForm!: FormGroup;
  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private customerService: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.reviewForm = this.fb.group({
      rating: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    this.isSpinning = true;
    const formData: FormData = new FormData();
    formData.append('img', this.selectedFile);
    formData.append('productId', this.productId.toString());
    formData.append('userId', UserStorageService.getUserId().toString());
    formData.append('rating', this.reviewForm.get('rating').value);
    formData.append('description', this.reviewForm.get('description').value);
    this.customerService.giveReview(formData).subscribe((res) => {
      this.isSpinning = false;
      if (res.id != null) {
        this.snackBar.open('Review Posted Successfully!', 'Close', {
          duration: 5000
        });
        this.router.navigateByUrl('/customer/my_orders');
      } else {
        this.snackBar.open("Something went wrong", 'ERROR', {
          duration: 5000
        });
      }
    });
  }

}
