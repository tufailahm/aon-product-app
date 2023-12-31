import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSummaryComponent } from './product-summary.component';

describe('ProductSummaryComponent', () => {
  let component: ProductSummaryComponent;
  let fixture: ComponentFixture<ProductSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSummaryComponent]
    });
    fixture = TestBed.createComponent(ProductSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
