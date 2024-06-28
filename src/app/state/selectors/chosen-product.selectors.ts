import { createFeatureSelector } from '@ngrx/store';
import { ChosenProduct } from '../../models/chosen-product.interface';

export const selectChosenProductsState = createFeatureSelector<ChosenProduct[]>('chosenProducts');