import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { StartPageComponent } from './start-page/start-page.component';

export const routes: Routes = [
    { path: 'start', component: StartPageComponent },
    { path: 'stuff', component: ProductListComponent },
    { path: '', redirectTo: 'start', pathMatch: 'full' }
  ];
