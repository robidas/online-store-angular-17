import { Component, OnInit } from '@angular/core';
import { TotalsComponent } from "../totals/totals.component";
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateCardExpiration, updatePaymentMethod } from '../state/actions/payment-info.actions';
import { selectCardExpiration, selectPaymentMethod } from '../state/selectors/payment-info.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [TotalsComponent, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  paymentMethod$!: Observable<"credit card" | "pay pal" | "my pay" | null>;
  cardExpiration$!: Observable<Date | null>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // Use selectors to get the current state
    this.paymentMethod$ = this.store.select(selectPaymentMethod);
    this.cardExpiration$ = this.store.select(selectCardExpiration);
  }

  // Dispatch an action when the payment method changes
  onChangePaymentMethod(newMethod: "credit card" | "pay pal" | "my pay" | null) {
    this.store.dispatch(updatePaymentMethod({ paymentMethod: newMethod }));
  }

  // Dispatch an action when the card expiration date changes
  onChangeCardExpiration(newExpiration: Date) {
    this.store.dispatch(updateCardExpiration({ cardExpiration: newExpiration }));
  }


}
