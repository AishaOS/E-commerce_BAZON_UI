import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-place-orders',
  templateUrl: './my-place-orders.component.html',
  styleUrls: ['./my-place-orders.component.scss']
})
export class MyPlaceOrdersComponent {

  MyOrders: any;
  isSpinning: boolean;

  constructor(
    private customerService: CustomerService,
  ) { }

  ngOnInit(): void {
    this.getMyOrdersByUserId();
  }

  getMyOrdersByUserId() {
    this.isSpinning = true;
    this.customerService.getMyOrdersByUserId().subscribe((res) => {
      this.isSpinning = false;
      this.MyOrders = res;
      console.log(this.MyOrders);
    })
  }

}