import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPlaceComponent } from './order-place.component';

describe('OrderPlaceComponent', () => {
  let component: OrderPlaceComponent;
  let fixture: ComponentFixture<OrderPlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderPlaceComponent]
    });
    fixture = TestBed.createComponent(OrderPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
