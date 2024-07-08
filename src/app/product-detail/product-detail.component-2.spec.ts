import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { ProductDetailComponent } from './product-detail.component';
import { Component } from '@angular/core';

// Declare DummyComponent
@Component({template: ''})
class DummyComponent {}

describe('ProductDetailComponent-2', () => {
  it('addProduct should subscribe to product$ and get a test product', () => {
    // Mock Store setup
    const mockStore = {
      dispatch: jasmine.createSpy('dispatch'),
      select: jasmine.createSpy('select').and.returnValue(of({ id: 'testId', productName: 'testProduct' }))
    };

    // Mock ActivatedRoute setup
    const mockActivatedRoute = {
      snapshot: {
        params: { 'id': 'testId' }
      }
    };

    TestBed.configureTestingModule({
        imports: [
          ProductDetailComponent,
          // Use DummyComponent in the route configuration
          RouterModule.forRoot([
            { path: 'stuff', component: DummyComponent }
          ])
        ],
        providers: [
          { provide: Store, useValue: mockStore },
          { provide: ActivatedRoute, useValue: mockActivatedRoute }
        ]
      });
    
    const fixture: ComponentFixture<ProductDetailComponent> = TestBed.createComponent(ProductDetailComponent);
    const component: ProductDetailComponent = fixture.componentInstance;
    fixture.detectChanges();

    // Spy on component's addProduct method
    spyOn(component, 'addProduct').and.callThrough();

    // Trigger the addProduct method
    component.addProduct();

    // Verify addProduct was called
    expect(component.addProduct).toHaveBeenCalled();

    // Further assertions can be added here to verify the behavior of addProduct
    // For example, verifying that the store's dispatch method was called with the correct action
  });
});