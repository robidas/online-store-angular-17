/**
 * src/app/state/reducers/available-product.reducer.ts
 * 
 * This file contains the reducer function for the available products state slice.
 */

import { createReducer, on } from '@ngrx/store';
import { AvailableProduct } from '../../models/available-product.interface';

// Initial state for available products
export const initialAvailableProductState: AvailableProduct[] = [];

// Stub reducer for available products
export const availableProductReducer = createReducer(
  initialAvailableProductState
  // Add on() functions here for handling actions
);
