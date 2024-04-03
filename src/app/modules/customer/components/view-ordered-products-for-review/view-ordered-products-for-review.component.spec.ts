import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderedProductsForReviewComponent } from './view-ordered-products-for-review.component';

describe('ViewOrderedProductsForReviewComponent', () => {
  let component: ViewOrderedProductsForReviewComponent;
  let fixture: ComponentFixture<ViewOrderedProductsForReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewOrderedProductsForReviewComponent]
    });
    fixture = TestBed.createComponent(ViewOrderedProductsForReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
