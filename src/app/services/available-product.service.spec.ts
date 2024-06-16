import { TestBed } from '@angular/core/testing';

import { AvailableProductService } from './available-product.service';

describe('AvailableProductService', () => {
  let service: AvailableProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all available products', (done: DoneFn) => {
    service.getAll().subscribe(products => {
      expect(products.length).toBe(2);
      expect(products[0].productName).toBe('cuppa');
      expect(products[1].productName).toBe('cucumber');
      done();
    });
  });


  it('should return a product by id', (done: DoneFn) => {
    service.getById('01').subscribe(product => {
      expect(product).toBeTruthy();
      expect(product?.id).toBe('01');
      expect(product?.productName).toBe('cuppa');
      done();
    });
  });

  it('should return null if product by id is not found', (done: DoneFn) => {
    service.getById('03').subscribe(product => {
      expect(product).toBeNull();
      done();
    });
  });


});
