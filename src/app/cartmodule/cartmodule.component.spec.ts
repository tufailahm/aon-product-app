import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartmoduleComponent } from './cartmodule.component';

describe('CartmoduleComponent', () => {
  let component: CartmoduleComponent;
  let fixture: ComponentFixture<CartmoduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartmoduleComponent]
    });
    fixture = TestBed.createComponent(CartmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
