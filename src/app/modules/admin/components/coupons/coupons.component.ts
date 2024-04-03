import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent {

  isSpinning = false;
  coupons: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getPlacedOrders();
  }

  getPlacedOrders() {
    this.adminService.getCoupons().subscribe((res) => {
      this.coupons = res;
    })
  }

}
