import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';
import { Store } from '@ngrx/store';

// Assuming MockStore is defined in the same way as in your other test files
class MockStore {
  dispatch = jasmine.createSpy('dispatch');
  select = jasmine.createSpy('select');
}

describe('ProductDetailComponent', () => {
  beforeEach(async () => {
	await TestBed.configureTestingModule({
	  imports: [
		RouterModule.forRoot([]), // Use forRoot with an empty array of routes for testing
		ProductDetailComponent, // Import the standalone component here
	  ],
	  providers: [
		// Provide the mock store instead of the actual Store service
		{ provide: Store, useClass: MockStore }
	  ],
	  // declarations array is removed since the component is standalone
	}).compileComponents();
  });

  it('should create', () => {
	const fixture = TestBed.createComponent(ProductDetailComponent);
	const component = fixture.componentInstance;
	expect(component).toBeTruthy();
  });
});