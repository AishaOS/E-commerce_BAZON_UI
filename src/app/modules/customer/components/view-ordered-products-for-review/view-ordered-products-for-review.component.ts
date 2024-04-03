import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-view-ordered-products-for-review',
  templateUrl: './view-ordered-products-for-review.component.html',
  styleUrls: ['./view-ordered-products-for-review.component.scss']
})
export class ViewOrderedProductsForReviewComponent {

  orderId: any = this.activatedroute.snapshot.params['orderId'];
  isSpinning = false;
  orderedProductDetailsList: any[] = [];
  totalAmount: any;

  constructor(
    private customerService: CustomerService,
    private activatedroute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getOrderedProductsDetailsByOrderId();
  }

  getOrderedProductsDetailsByOrderId() {
    this.customerService.getOrderedProductsDetailsByOrderId(this.orderId).subscribe((res) => {
      console.log(res);
      res.orderedProductDetailsList.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.orderedProductDetailsList.push(element);
      });
      this.orderedProductDetailsList = res.orderedProductDetailsList;
      this.totalAmount = res.orderAmount;
    })
  }

}
