import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth-services/auth-service/auth.service';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.scss']
})
export class TrackOrderComponent {

  order: any;
  isSpinning: boolean;
  searchOrderForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.searchOrderForm = this.fb.group({
      trackingId: [null, [Validators.required]],
    });
  }

  submitForm() {
    this.isSpinning = true;
    console.log(this.searchOrderForm.get('trackingId').value);
    this.authService.getOrderByTrackingId(this.searchOrderForm.get('trackingId').value).subscribe((res) => {
      this.isSpinning = false;
      this.order = res;
      console.log(this.order);
    })
  }


}