import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CheckoutComponent } from './checkout.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

// Mock TotalsComponent to isolate the testing environment and remove dependencies.
// Specifically, the TotalsComponent depends on the NgRx store, which is not needed for this test.
@Component({
  selector: 'app-totals',
  template: '',
  standalone: true
})
class MockTotalsComponent { }

describe('CheckoutComponent', () => {

  // The mockStore variable is a mock version of the NgRx store used for testing
  // purposes. It allows us to simulate state changes and interactions.
  let mockStore: MockStore;

  // The standaloneComponent variable represents an instance of the
  // CheckoutComponent, which is under test.
  let standaloneComponent: CheckoutComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MockTotalsComponent
      ],
      providers: [
        provideMockStore(), // Sets up the MockStore for tests.
        CheckoutComponent // Includes the component under test.
      ]

    })
      .overrideComponent(CheckoutComponent, {
        set: {
          imports: [MockTotalsComponent] // Override the imports of CheckoutComponent to use the mock
        }
      })
      .compileComponents();

    mockStore = TestBed.inject(MockStore);
    standaloneComponent = new CheckoutComponent(mockStore as any);

  });

  it('should create', () => {
    expect(standaloneComponent).toBeTruthy();
  });
});