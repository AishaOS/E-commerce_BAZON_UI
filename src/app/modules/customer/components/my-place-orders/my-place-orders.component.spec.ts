import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlaceOrdersComponent } from './my-place-orders.component';

describe('MyPlaceOrdersComponent', () => {
  let component: MyPlaceOrdersComponent;
  let fixture: ComponentFixture<MyPlaceOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPlaceOrdersComponent]
    });
    fixture = TestBed.createComponent(MyPlaceOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
