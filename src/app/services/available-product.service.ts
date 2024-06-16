/**
 * AvailableProductService
 * 
 * This service provides methods to manage available products.
 * It includes methods to get an available product by id and to get all available products.
 */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AvailableProduct } from '../models/available-product.interface';


@Injectable({
  providedIn: 'root'
})
export class AvailableProductService {
  // Array of available products
  private availableProducts: AvailableProduct[] = AVAILABLE_PRODUCTS;

  constructor() { }

  /**
   * Get an available product by its id.
   * 
   * @param id - The id of the available product.
   * @returns The available product with the specified id, or null if no available product has the specified id.
   */
  getById(id: string): Observable<AvailableProduct | null> {
    const availableProduct = this.availableProducts.find(ap => ap.id === id);
    return of(availableProduct ? availableProduct : null);
  }

  /**
   * Get all available products.
   * 
   * @returns An array of all available products.
   */
  getAll(): Observable<AvailableProduct[]> {
    return of(this.availableProducts);
  }
}

// Array of available product data
const AVAILABLE_PRODUCTS: AvailableProduct[] = [
  {
    "id": "01",
    "productName": "cuppa",
    "productDetails": "A cup of tea and a bickie. A wonderfully soothing afternoon break.",
    "productImageSource": "https://www.example.com/photo/",
    "downloadDate": "2023-Oct-03",
    "productImageFile": "src/assets/img/fancyacuppa_sm.jpg",
    "unitPrice": 39.99,
  },
  {
    "id": "02",
    "productName": "cucumber",
    "productDetails": "Some people like to eat a cucumber, but you can use it for whatever you want.",
    "productImageSource": "https://www.example.com/photo/",
    "downloadDate": "2023-Nov-06",
    "productImageFile": "src/assets/img/cucumbers_sm.jpg",
    "unitPrice": 9.71,
  },

];