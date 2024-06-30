import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { AvailableProduct } from 'src/app/models/available-product.interface';
import { selectAvailableProductsState } from 'src/app/state/selectors/available-product.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],  // Import CommonModule here
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // Holds the list of products
  products$!: Observable<AvailableProduct[]>; // note the use of the definite assignment assertion operator (!)


  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.products$ = this.store.select(selectAvailableProductsState);
  }

}
