/**
 * AppState Interface
 * 
 * This file defines the structure of the application's state, which is managed by NGRX.
 */
import { AvailableProduct } from '../models/available-product.interface';
import { ChosenProduct } from '../models/chosen-product.interface';
import { PaymentInfo } from '../models/payment-info.interface';

// The AppState interface represents the entire state of the application.
export interface AppState {
  
  // The chosen products in the application state.
  chosenProducts: ChosenProduct[];

  // The available products in the application state.
  availableProducts: AvailableProduct[]; 

  // The payment information in the application state.
  paymentInfo: PaymentInfo;
}