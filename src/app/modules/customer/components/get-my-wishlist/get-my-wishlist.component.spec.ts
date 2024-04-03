import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMyWishlistComponent } from './get-my-wishlist.component';

describe('GetMyWishlistComponent', () => {
  let component: GetMyWishlistComponent;
  let fixture: ComponentFixture<GetMyWishlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetMyWishlistComponent]
    });
    fixture = TestBed.createComponent(GetMyWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
