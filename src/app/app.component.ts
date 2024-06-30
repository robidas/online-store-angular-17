import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from './footer/footer.component';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { loadAvailableProducts } from './state/actions/available-product.actions';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainLayoutComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
implements OnInit 
{
  // title = 'default-app';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    console.log('AppComponent: initializing...');
    this.store.dispatch(loadAvailableProducts());
  }
  
}
