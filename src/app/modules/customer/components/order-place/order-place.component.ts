import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-order-place',
  templateUrl: './order-place.component.html',
  styleUrls: ['./order-place.component.scss']
})
export class OrderPlaceComponent {

  orderForm!: FormGroup;
  Payment: string[] = ["Cash On Delivery"];

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private customerService: CustomerService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      address: [null, [Validators.required]],
      orderDescription: [null],
    });
  }

  placeOrder() {
    this.customerService.placeOrder(this.orderForm.value).subscribe((res) => {
      if (res.id != null) {
        this.snackBar.open("Order placed successfully", "Close", { duration: 5000 })
        this.closeForm();
        this.router.navigateByUrl("/customer/my_orders");
      } else {
        this.snackBar.open("Something went wrong", "Close", { duration: 5000 })
      }
    });
  }


  closeForm() {
    this.dialog.closeAll();
  }

}
