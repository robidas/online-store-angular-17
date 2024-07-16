import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CheckoutComponent } from './checkout.component';

// Mock TotalsComponent to isolate the testing environment and remove dependencies.
// Specifically, the TotalsComponent depends on the NgRx store, which is not needed for this test.
@Component({
  selector: 'app-totals',
  template: '',
  standalone: true 
})
class MockTotalsComponent {}

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        CheckoutComponent, 
        MockTotalsComponent 
      ],
    })
    .overrideComponent(CheckoutComponent, {
      set: {
        imports: [MockTotalsComponent] // Override the imports of CheckoutComponent to use the mock
      }
    })
    .compileComponents();
  
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  fit('should create', () => {
	expect(component).toBeTruthy();
  });
});