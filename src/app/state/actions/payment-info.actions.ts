import { createAction, props } from "@ngrx/store";

export const updatePaymentMethod = createAction(
  '[Checkout Component] Update Payment Method',
  props<{ paymentMethod: "credit card" | "pay pal" | "my pay" | null }>()
);

export const updateCardExpiration = createAction(
  '[Checkout Component] Update Card Expiration',
  props<{ cardExpiration: Date }>()
);