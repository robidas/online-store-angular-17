/**
 * Chosen Product Actions
 * 
 * This file defines the actions related to the chosen products in the application state.
 */
import { createAction, props } from '@ngrx/store';
import { ChosenProduct } from '../../models/chosen-product.interface';

// Action dispatched when a chosen product item is added to the chosen products array.
export const addChosenProduct = createAction(
  '[Chosen Products] Add Chosen Product',
  props<{ chosenProduct: ChosenProduct }>()
);

// Action dispatched when a chosen product item is removed from the chosen products array.
export const removeChosenProduct = createAction(
  '[Chosen Products] Remove Chosen Product',
  props<{ productId: string }>()
);