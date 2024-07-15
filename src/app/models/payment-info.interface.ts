/**
 * PaymentInfo Interface
 * 
 * This interface defines the structure for payment information, including the
 * payment method and card expiration date.
 */

export interface PaymentInfo {
  // The user's chosen method of payment, restricted to specific values.
  paymentMethod: "credit card" | "pay pal" | "my pay";

  // The user's credit card expiration date.
  cardExpiration: Date;
}