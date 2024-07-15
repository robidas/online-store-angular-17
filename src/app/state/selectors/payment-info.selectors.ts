import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectPaymentInfo = (state: AppState) => state.paymentInfo;

export const selectPaymentMethod = createSelector(
  selectPaymentInfo,
  (paymentInfo) => paymentInfo.paymentMethod
);

export const selectCardExpiration = createSelector(
  selectPaymentInfo,
  (paymentInfo) => paymentInfo.cardExpiration
);