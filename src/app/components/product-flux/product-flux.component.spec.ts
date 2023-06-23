import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFluxComponent } from './product-flux.component';

describe('ProductFluxComponent', () => {
  let component: ProductFluxComponent;
  let fixture: ComponentFixture<ProductFluxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFluxComponent]
    });
    fixture = TestBed.createComponent(ProductFluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
