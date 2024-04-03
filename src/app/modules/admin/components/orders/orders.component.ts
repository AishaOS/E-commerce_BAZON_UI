import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AdminService } from '../../service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  isSpinning = false;
  Orders: any;

  constructor(
    private adminService: AdminService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getPlacedOrders();
  }

  getPlacedOrders() {
    this.adminService.getPlacedOrders().subscribe((res) => {
      this.Orders = res;
      console.log(res);
    })
  }

  changeOrderStatus(orderId: number, status: string) {
    console.log('Status is:', status);
    this.adminService.changeOrderStatus(orderId, status).subscribe(
      (res) => {
        console.log(res);
        if (res.id != null) {
          this.snackBar.open("Order Status changed successfully", "Close", { duration: 5000 });
          this.getPlacedOrders();
        } else {
          this.snackBar.open("Something went wrong", "Close", { duration: 5000 });
        }
      })
  }

}
