/**
 * TotalsComponent Tests
 * 
 * This file contains unit tests for the TotalsComponent, focusing on its ability
 * to accurately calculate and display the subtotal, tax, and grand total values
 * based on the chosen products in the application. It leverages Angular's testing
 * utilities to simulate interactions with the NgRx store, ensuring that the
 * component behaves as expected when products are added or removed from the state.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TotalsComponent } from './totals.component';
import { provideStore, Store } from '@ngrx/store';
import { chosenProductReducer } from '../state/reducers/chosen-product.reducer';
import { ChosenProduct } from '../models/chosen-product.interface';
import { addChosenProduct } from '../state/actions/chosen-product.actions';

describe('TotalsComponent', () => {
  let component: TotalsComponent;
  let fixture: ComponentFixture<TotalsComponent>;
  let store: Store;

  beforeEach(async () => {

    // Configures the testing module for TotalsComponent tests.
    // This setup includes the NgRx Store module with reducers, allowing us to
    // simulate state changes and interactions as they would occur in the
    // application's runtime environment.    
    await TestBed.configureTestingModule({
      imports: [TotalsComponent],
      providers: [
        provideStore({ chosenProducts: chosenProductReducer })
      ]
    })
      .compileComponents();

    // Initializes the component and store instances before each test.
    // This ensures a clean state for every test case, preventing unintended
    // side effects or state persistence between tests.
    fixture = TestBed.createComponent(TotalsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate subtotal correctly considering reducer behavior', () => {

    // Mock data for chosen products to simulate adding products to the state.
    const product1: ChosenProduct = { 
      id: '01', 
      productName: 'Product 1', 
      unitPrice: 10.00, 
      qty: 0 
    };
    const product2: ChosenProduct = { 
      id: '02', 
      productName: 'Product 2', 
      unitPrice: 20.00, 
      qty: 0 
    };

    // Dispatch actions to add product1 three times to the state to simulate a
    // quantity of 3. This mimics the user's action of choosing a product multiple
    // times in the application.
    for (let i = 0; i < 3; i++) {
      store.dispatch(addChosenProduct({ chosenProduct: product1 }));
    }

    // Similarly, dispatch actions to add product2 twice to the state to simulate
    // a quantity of 2. This step further prepares our simulated application state
    // for testing the component's subtotal calculation logic.
    for (let i = 0; i < 2; i++) {
      store.dispatch(addChosenProduct({ chosenProduct: product2 }));
    }

    // Trigger the ngOnInit lifecycle hook manually to initiate the calculation
    // of subtotal. This is necessary because the component relies on ngOnInit
    // to subscribe to the store and calculate totals based on the current state.
    component.ngOnInit();

    // Calculate the expected subtotal manually based on the mock data provided.
    // This value will be used to verify that the component's calculation logic
    // is functioning correctly.
    const expectedSubtotal = (product1.unitPrice * 3) + (product2.unitPrice * 2);

    // Assert that the component's subtotal matches the expected subtotal.
    // This test verifies that the component correctly calculates the subtotal
    // based on the chosen products in the state.
    expect(component.subtotal).toEqual(expectedSubtotal);
  });

});
