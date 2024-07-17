import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CheckoutComponent } from './checkout.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { updateCardExpiration, updatePaymentMethod } from '../state/actions/payment-info.actions';
import { selectCardExpiration, selectPaymentMethod } from '../state/selectors/payment-info.selectors';
import { MemoizedSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';

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


  });

  it('should initialize paymentMethod$ observable with the current payment method from store', () => {

    // Initialize mockStore and standaloneComponent with mockStore
    mockStore = TestBed.inject(MockStore);
    standaloneComponent = new CheckoutComponent(mockStore as any);

    // Mock selectors
    mockStore.overrideSelector(selectPaymentMethod, "credit card");

    // Spy on store.select to ensure it's called with the correct selectors
    spyOn(mockStore, 'select').and.callThrough();

    standaloneComponent.ngOnInit();
    standaloneComponent.paymentMethod$.subscribe(method => {
      expect(method).toEqual("credit card");
    });
    expect(mockStore.select).toHaveBeenCalledWith(selectPaymentMethod);
  });


  it('should transform cardExpiration$ to a formatted string in cardExpirationString$', () => {

    // Initialize mockStore and standaloneComponent with mockStore
    mockStore = TestBed.inject(MockStore);
    standaloneComponent = new CheckoutComponent(mockStore as any);

    // Mock selectors
    mockStore.overrideSelector(selectCardExpiration, new Date('2023-12-31'));

    // Spy on store.select to ensure it's called with the correct selectors
    spyOn(mockStore, 'select').and.callThrough();

    standaloneComponent.ngOnInit();
    standaloneComponent.cardExpirationString$.subscribe(formattedDate => {
      expect(formattedDate).toEqual('2023-12-31');
    });
  });


  it('should create', () => {
    mockStore = TestBed.inject(MockStore);
    standaloneComponent = new CheckoutComponent(mockStore as any);
    expect(standaloneComponent).toBeTruthy();
  });

  it('should format date correctly', () => {
    // Arrange: Create a new date for testing.
    standaloneComponent = new CheckoutComponent(null as any);

    const testDate = new Date('2023-04-15T00:00:00Z'); // Use a fixed date for consistency.
    const expectedFormattedDate = '2023-04-15'; // Expected result in 'YYYY-MM-DD' format.

    // Act: Call the formatDate method with the test date.
    const formattedDate = standaloneComponent.formatDate(testDate);

    // Assert: Check if the formatted date matches the expected result.
    expect(formattedDate).toEqual(expectedFormattedDate);
  });

  it('should dispatch updateCardExpiration action with the new expiration date when onChangeCardExpiration is called', () => {
    // Arrange: Create a new date for testing and simulate an input event with this date.
    const testDate = new Date('2023-12-31');
    const testEvent = {
      target: { value: testDate.toISOString().split('T')[0] } // 'YYYY-MM-DD'
    } as unknown as Event;

    // Initialize mockStore and standaloneComponent with mockStore injected
    mockStore = TestBed.inject(MockStore);
    standaloneComponent = new CheckoutComponent(mockStore as any);

    // Spy on the store's dispatch method to verify it's called with the correct action and payload.
    spyOn(mockStore, 'dispatch');

    // Act: Call onChangeCardExpiration with the simulated event.
    standaloneComponent.onChangeCardExpiration(testEvent);

    // Assert: Verify the correct action is dispatched with the new expiration date.
    expect(mockStore.dispatch).toHaveBeenCalledWith(updateCardExpiration({ cardExpiration: testDate }));
  });

  it('should dispatch updatePaymentMethod action with the new payment method when onChangePaymentMethod is called', () => {
    // Arrange: Simulate a select element event with a new payment method value.
    const testEvent = {
      target: { value: 'credit card' } // Assuming 'credit card' is selected
    } as unknown as Event;

    // Initialize mockStore and standaloneComponent with mockStore injected
    mockStore = TestBed.inject(MockStore);
    standaloneComponent = new CheckoutComponent(mockStore as any);

    // Spy on the store's dispatch method to verify it's called with the correct action and payload.
    spyOn(mockStore, 'dispatch');

    // Act: Call onChangePaymentMethod with the simulated event.
    standaloneComponent.onChangePaymentMethod(testEvent);

    // Assert: Verify the correct action is dispatched with the new payment method.
    expect(mockStore.dispatch).toHaveBeenCalledWith(updatePaymentMethod({ paymentMethod: 'credit card' }));
  });

});