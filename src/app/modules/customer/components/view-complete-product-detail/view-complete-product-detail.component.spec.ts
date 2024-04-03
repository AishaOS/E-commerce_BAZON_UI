import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompleteProductDetailComponent } from './view-complete-product-detail.component';

describe('ViewCompleteProductDetailComponent', () => {
  let component: ViewCompleteProductDetailComponent;
  let fixture: ComponentFixture<ViewCompleteProductDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCompleteProductDetailComponent]
    });
    fixture = TestBed.createComponent(ViewCompleteProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
