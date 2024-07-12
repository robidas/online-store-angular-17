/**
 * cart.component.ts
 * 
 * This component represents the cart view of the application. It allows users
 * to view chosen products and interact with them.
 */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChosenProduct } from '../models/chosen-product.interface';
import { addToCart, removeChosenProduct } from '../state/actions/chosen-product.actions';
import { AppState } from '../state/app.state';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { selectChosenProductsState } from '../state/selectors/chosen-product.selectors';
import { CommonModule } from '@angular/common';
import { TotalsComponent } from '../totals/totals.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    TotalsComponent
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // Test product fields
  testProductId = '01';
  testProductName = 'Test Product';

  // Observable to hold the chosen products
  chosenProducts$!: Observable<ChosenProduct[]>;


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chosenProducts$ = this.store.select(selectChosenProductsState);
  }

  // Function to add a product to the state
  addProduct(id: string, productName: string, unitPrice: number) {

    // Dispatch the addToCart action with the test product
    this.store.dispatch(addToCart({ id, productName, unitPrice}));
  }

  // Function to remove a test chosen product from state.
  removeProduct(): void {
    if (!this.testProductId) return; // Guard clause to prevent removing undefined or empty ID
    this.store.dispatch(removeChosenProduct({ productId: this.testProductId })); // Use testProductId directly
  }

  showAlert(message: string): void {
    window.alert(message);
  }



}
