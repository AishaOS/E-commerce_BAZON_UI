import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-get-my-wishlist',
  templateUrl: './get-my-wishlist.component.html',
  styleUrls: ['./get-my-wishlist.component.scss']
})
export class GetMyWishlistComponent {

  products: any[] = [];

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.getWishlistByUserId();
  }

  getWishlistByUserId() {
    this.customerService.getWishlistByUserId().subscribe(
      (res) => {
        console.log(res);
        // this.products = res;
        res.forEach(element => {
          element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
          this.products.push(element);
        });
      }
    )
  }



}
