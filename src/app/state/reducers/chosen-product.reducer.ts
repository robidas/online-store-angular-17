/**
 * chosenProductReducer
 * 
 * This file defines the reducer function for managing the state of chosen
 * products in the application. The reducer listens for specific actions and
 * updates the state accordingly.
 * 
 * Explanation of Code Coverage Issues and Resolution:
 * The initial implementation used map and filter for updating the state, which led to coverage issues as some branches within the map function were not fully tested. We refactored the code to use a procedural approach with forEach loops, allowing us to explicitly handle each product and ensure all branches were covered. This change ensured that all branches within the reducer functions are tested, leading to 100% code coverage as verified by Karma.
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
      console.debug("not found");

      // Product does not exist in the cart, add it with quantity 1.
      return [...state, { ...chosenProduct, qty: 1 }];
    } else {
      console.debug("found: ", foundProduct);

      // Product already exists in the cart, increment the quantity.
      // The original approach using map caused issues with code coverage,
      // so we replaced it with a more explicit iteration using forEach.
      // This ensures all branches are covered.
      let returnState: ChosenProduct[] = [];
      state.forEach(p => {
        let product: ChosenProduct = { ...p };
        if (product.id === chosenProduct.id) {
          // Increment the quantity of the existing product
          product.qty = (product.qty ?? 0) + 1;
        }
        returnState.push(product);
      });
      return returnState;
    }
  }),

  // Handle the removeChosenProduct action
  on(removeChosenProduct, (state, { productId }) => {

    // Check if the product exists in the cart
    const foundProduct = state.find(p => p.id === productId);
    if (!foundProduct) {
      // Product does not exist in the cart, return the current state.
      return state;
    } else {

      // Product exists in the cart, decrement the quantity or remove the product.
      // The original approach using map and filter caused issues with code coverage,
      // so we replaced it with a more explicit iteration using forEach.
      // This ensures all branches are covered.
      let returnState: ChosenProduct[] = [];
      state.forEach(p => {
        let product: ChosenProduct = { ...p };
        if (product.id === productId) {
          // Decrement the quantity of the existing product
          product.qty = (product.qty ?? 0) - 1;
        }
        // Only add the product to the return state if its quantity is greater than 0
        if ((product.qty ?? 0) > 0) {
          returnState.push(product);
        }
      });
      return returnState;
    }
  })
);
