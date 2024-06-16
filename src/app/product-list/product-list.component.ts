import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailableProductService } from '../services/available-product.service';
import { Observable } from 'rxjs';
import { AvailableProduct } from '../models/available-product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],  // Import CommonModule here
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$!: Observable<AvailableProduct[]>;

  constructor(private availableProductService: AvailableProductService) {}

  ngOnInit(): void {
    this.products$ = this.availableProductService.getAll();
  }
}
