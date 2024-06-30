/**
 * Available Product Reducer
 * 
 * This file defines the reducer for available products. The reducer's on() functions
 * return a new state object that represents the updated state of the available products
 * based on the dispatched action and its payload.
 */
import { createReducer, on } from '@ngrx/store';
import { AvailableProduct } from '../../models/available-product.interface';
import {
  loadAvailableProducts,
  loadAvailableProductsSuccess,
  loadAvailableProductsFailure
} from '../actions/available-product.actions';

// Initial state for the available products.
export const initialState: AvailableProduct[] = [];

// Reducer for handling actions related to available products. 
export const availableProductReducer = createReducer(
  initialState,

  // Handles the loadAvailableProducts action.
  on(loadAvailableProducts, state => {
    console.debug("availableProductReducer: state: ", state);
    return [...state];
  }),

  // Handles the loadAvailableProductsSuccess action.
  on(loadAvailableProductsSuccess, (state, { availableProducts }) => {
    console.debug("availableProductReducer: availableProducts: ", availableProducts);
    return [...availableProducts];
  }),

  // Handles the loadAvailableProductsFailure action.
  on(loadAvailableProductsFailure, (state, { error }) => {
    console.debug("availableProductReducer: error: ", error);
    return [...state];
  }),
);