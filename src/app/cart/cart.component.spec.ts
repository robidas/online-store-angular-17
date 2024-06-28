/**
 * cart.component.spec.ts
 * 
 * This file contains unit tests for the CartComponent, ensuring it behaves as
 * expected and integrates correctly with the NgRx Store.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { provideStore } from '@ngrx/store';
import { chosenProductReducer } from '../state/reducers/chosen-product.reducer';
import { ChosenProduct } from '../models/chosen-product.interface';
import { Store } from '@ngrx/store';
import { addChosenProduct } from '../state/actions/chosen-product.actions';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent],
      providers: [
        provideStore({ chosenProducts: chosenProductReducer })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have default testProductId and testProductName', () => {
    expect(component.testProductId).toBe('01');
    expect(component.testProductName).toBe('Test Product');
  });


  it('should dispatch addChosenProduct action when addProduct is called', () => {
    const testProduct: ChosenProduct = {
      id: '01',
      productName: 'Test Product',
      productDetails: 'Some details for test purposes',
      unitPrice: 100.00,
      qty: 0
    };
    
    spyOn(store, 'dispatch');
    component.addProduct();

    expect(store.dispatch).toHaveBeenCalledWith(addChosenProduct({ chosenProduct: testProduct }));
  });


  it('should call addProduct method when button is clicked', () => {
    spyOn(component, 'addProduct');
    
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    expect(component.addProduct).toHaveBeenCalled();
  });

});
