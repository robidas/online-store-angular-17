import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSummaryComponent } from './product-summary.component';
import { AvailableProduct } from '../models/available-product.interface';

describe('ProductSummaryComponent', () => {
  let component: ProductSummaryComponent;
  let fixture: ComponentFixture<ProductSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductSummaryComponent);
    component = fixture.componentInstance;


        // Correctly mock the product input
        const mockProduct: AvailableProduct = {
          id: "00", // Example ID
          productName: "Example Product Name",
          productDetails: "Example product details describing the product.",
          productImageSource: "https://example.com/product-image-source.jpg",
          downloadDate: "2023-01-01",
          productImageFile: "https://example.com/product-image-file.jpg",
          unitPrice: 99.99 // Example unit price
        };



        component.product = mockProduct;
    

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
