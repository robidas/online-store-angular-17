import { Component } from '@angular/core';
import { TotalsComponent } from "../totals/totals.component";

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [TotalsComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

}
