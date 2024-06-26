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
import { addChosenProduct, removeChosenProduct } from '../state/actions/chosen-product.actions';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: Store;

  beforeEach(async () => {
    // Setting up the testing module for CartComponent
    await TestBed.configureTestingModule({
      imports: [CartComponent],
      providers: [
        provideStore({ chosenProducts: chosenProductReducer }) // Providing the NgRx store with the chosenProductReducer
      ]
    }).compileComponents();

    // Creating the component fixture and instance
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store); // Injecting the store for testing
    fixture.detectChanges(); // Triggering change detection
  });

  // Ensure the CartComponent is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Check default values of testProductId and testProductName
  it('should have default testProductId and testProductName', () => {
    // Arrange: component is already initialized
    // Act: nothing to act on, just checking defaults
    // Assert: verify the default values
    expect(component.testProductId).toBe('01');
    expect(component.testProductName).toBe('Test Product');
  });

  // Ensure addChosenProduct action is dispatched when addProduct is called
  it('should dispatch addChosenProduct action when addProduct is called', () => {
    // Arrange: create a test product and spy on the store.dispatch method
    const testProduct: ChosenProduct = {
      id: '01',
      productName: 'Test Product',
      productDetails: 'Some details for test purposes',
      unitPrice: 100.00,
      qty: 0
    };
    spyOn(store, 'dispatch');
    
    // Act: call addProduct method
    component.addProduct();

    // Assert: verify if the addChosenProduct action was dispatched
    expect(store.dispatch).toHaveBeenCalledWith(addChosenProduct({ chosenProduct: testProduct }));
  });

  // Ensure addProduct method is called when the button is clicked
  it('should call addProduct method when button is clicked', () => {
    // Arrange: spy on the addProduct method
    spyOn(component, 'addProduct');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    
    // Act: simulate button click
    button.click();

    // Assert: verify if addProduct method was called
    expect(component.addProduct).toHaveBeenCalled();
  });

  // Ensure removeChosenProduct action is dispatched with testProductId when removeProduct is called and testProductId is defined
  it('should dispatch removeChosenProduct action with testProductId when removeProduct is called and testProductId is defined', () => {
    // Arrange: define testProductId and spy on the store.dispatch method
    spyOn(store, 'dispatch');
    component.testProductId = '01';
    
    // Act: call removeProduct method
    component.removeProduct();

    // Assert: verify if the removeChosenProduct action was dispatched with the correct productId
    expect(store.dispatch).toHaveBeenCalledWith(removeChosenProduct({ productId: '01' }));
  });  

  // Ensure removeChosenProduct action is not dispatched when removeProduct is called and testProductId is empty
  it('should not dispatch removeChosenProduct action when removeProduct is called and testProductId is empty', () => {
    // Arrange: set testProductId to empty and spy on the store.dispatch method
    spyOn(store, 'dispatch');
    component.testProductId = '';
    
    // Act: call removeProduct method
    component.removeProduct();

    // Assert: verify if the removeChosenProduct action was not dispatched
    expect(store.dispatch).not.toHaveBeenCalled();
  });

});
