import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { StartPageComponent } from './start-page/start-page.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
    { path: 'start', component: StartPageComponent },
    { path: 'stuff', component: ProductListComponent },
    { path: 'cart', component: CartComponent},
    { path: 'checkout', component: CheckoutComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: '', redirectTo: 'start', pathMatch: 'full' }
  ];
