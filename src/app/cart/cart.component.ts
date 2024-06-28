/**
 * cart.component.ts
 * 
 * This component represents the cart view of the application. It allows users
 * to view chosen products and interact with them.
 */

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChosenProduct } from '../models/chosen-product.interface';
import { addChosenProduct } from '../state/actions/chosen-product.actions';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  // Test product fields
  testProductId = '01';
  testProductName = 'Test Product';

  constructor(private store: Store<AppState>) {}

  // Function to add a test product to the state
  addProduct() {
    const testProduct: ChosenProduct = {
      id: this.testProductId,
      productName: this.testProductName,
      productDetails: 'Some details for test purposes',
      unitPrice: 100.0,
      qty: 0
    };

    // Dispatch the addChosenProduct action with the test product
    this.store.dispatch(addChosenProduct({ chosenProduct: testProduct }));
  }
}
