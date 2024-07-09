import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-totals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.css']
})
export class TotalsComponent {
  subtotal: number = 1; // Hardcoded for testing
  tax: number = 1; // Hardcoded for testing
  grandTotal: number = 1; // Hardcoded for testing
}
