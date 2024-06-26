/**
 * chosen-product.reducer.ts
 * 
 * This file defines the reducer function for managing the state of chosen
 * products in the application. The reducer listens for specific actions and
 * updates the state accordingly.
 */

import { createReducer, on } from '@ngrx/store';
import { addChosenProduct, removeChosenProduct } from '../actions/chosen-product.actions';
import { ChosenProduct } from '../../models/chosen-product.interface';

// Initial state for chosen products, which is an empty array.
const initialState: ChosenProduct[] = [];

// Reducer function for chosen products.
export const chosenProductReducer = createReducer(
  initialState,

  // Handle the addChosenProduct action
  on(addChosenProduct, (state, { chosenProduct }) => {
    // Check if the product already exists in the cart
    const foundProduct = state.find(p => p.id === chosenProduct.id);
    if (!foundProduct) {
      // Product does not exist in the cart, add it with quantity 1.
      return [...state, { ...chosenProduct, qty: 1 }];
    } else {
      // Product already exists in the cart, increment the quantity.
      return state.map(p => p.id === chosenProduct.id ? { ...p, qty: p.qty + 1 } : p);
    }
  }),

  // Handle the removeChosenProduct action
  on(removeChosenProduct, (state, { productId }) => {
    // Check if the product exists in the cart
    const foundProduct = state.find(p => p.id === productId);
    if (!foundProduct) {
      return state;
    } else {
      // Product exists in the cart, decrement the quantity or remove the product.
      return state
        .map(p => p.id === productId ? { ...p, qty: p.qty - 1 } : p)
        .filter(p => p.qty > 0);
    }
  })
);
