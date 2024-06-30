import { createFeatureSelector } from '@ngrx/store';
import { ChosenProduct } from 'src/app/models/chosen-product.interface';

export const selectChosenProductsState = createFeatureSelector<ChosenProduct[]>('chosenProducts');