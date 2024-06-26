import { createReducer, on } from '@ngrx/store';
import { ChosenProduct } from '../../models/chosen-product.interface';

// Initial state for the chosen products.
export const initialState: ChosenProduct[] = [];

// Reducer for handling actions related to chosen products. 
export const chosenProductReducer = createReducer(
    initialState
);