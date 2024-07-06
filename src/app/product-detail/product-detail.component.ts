import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AvailableProduct } from 'src/app/models/available-product.interface';
import { selectAvailableProductById } from 'src/app/state/selectors/available-product.selectors';
import { AppState } from 'src/app/state/app.state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product$!: Observable<AvailableProduct | null>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
      this.product$ = this.route.params.pipe(
        switchMap(params => {
          const productId = params['id'];
          // Use the store.select method correctly with the selector
          return this.store.select(state => selectAvailableProductById(productId)(state));
        })
      );
    }

  
}