/**
 * cart.component.ts
 * 
 * This component represents the cart view of the application. It allows users
 * to view chosen products and interact with them.
 */

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChosenProduct } from '../models/chosen-product.interface';
import { addChosenProduct, removeChosenProduct } from '../state/actions/chosen-product.actions';
import { AppState } from '../state/app.state';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { selectChosenProductsState } from '../state/selectors/chosen-product.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // Test product fields
  testProductId = '01';
  testProductName = 'Test Product';
  chosenProducts$!: Observable<ChosenProduct[]>; // Observable to hold the chosen products


  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chosenProducts$ = this.store.select(selectChosenProductsState);
  }

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

  // Function to remove a test chosen product from state.
  removeProduct(): void {
    if (!this.testProductId) return; // Guard clause to prevent removing undefined or empty ID
    this.store.dispatch(removeChosenProduct({ productId: this.testProductId })); // Use testProductId directly
  }
  
}
