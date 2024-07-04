import { Component, Input } from '@angular/core';
import { AvailableProduct } from '../models/available-product.interface';

// import statements

import { CommonModule, CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-product-summary',
  standalone: true, // Enables standalone usage, no NgModule required
  imports: [CommonModule],
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.css']
})
export class ProductSummaryComponent {
  @Input() product!: AvailableProduct;
}
