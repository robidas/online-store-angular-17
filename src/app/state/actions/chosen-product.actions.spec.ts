/**
 * chosen-product.actions.spec.ts
 *
 * This file contains unit tests for the actions defined in chosen-product.actions.ts.
 * It aims to ensure that each action creator functions as expected, producing the correct
 * action object when invoked. These tests verify the integrity of the actions that are
 * dispatched to modify the state of chosen products within the application.
 */

// Explicitly importing each action creator
import { addChosenProduct, removeChosenProduct } from './chosen-product.actions';
import { ChosenProduct } from '../../models/chosen-product.interface';

describe('ChosenProduct Actions', () => {
  // Testing the action creators for adding and removing chosen products
  
  it('addChosenProduct should create an action to add a chosen product', () => {
    // Define a test product to add
    const testProduct: ChosenProduct = {
      id: '01',
      productName: 'Test Product',
      unitPrice: 100.00,
      qty: 1
    };

    // Create an action with the test product
    const action = addChosenProduct({ chosenProduct: testProduct });

    // Assert that the created action has the correct structure and content
    expect({ ...action }).toEqual({
      type: '[Chosen Products] Add Chosen Product',
      chosenProduct: testProduct
    });
  });

  it('removeChosenProduct should create an action to remove a chosen product by id', () => {
    // Define a product ID to remove
    const productId = '01';

    // Create an action to remove the product by ID
    const action = removeChosenProduct({ productId });

    // Assert that the created action has the correct structure and content
    expect({ ...action }).toEqual({
      type: '[Chosen Products] Remove Chosen Product',
      productId
    });
  });
});