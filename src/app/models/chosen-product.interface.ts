/**
 * Chosen Product Interface
 * 
 * This interface defines the structure of a chosen product object.
 * It includes properties for the chosen product's id, name, details, unit price, and quantity.
 */
export interface ChosenProduct {
    // The id of the chosen product.
    id: string;
  
    // The name of the chosen product.
    productName: string;
  
    // The details of the chosen product.
    productDetails: string;
  
    // The unit price of the chosen product.
    unitPrice: number;
  
    // The quantity of the chosen product.
    qty: number;
  }