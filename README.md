# Online Store Angular 17

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## NgRx State Management for Available Products

In order to manage the state of available products within our Angular application, we have implemented a slice of state using NgRx. This allows us to handle asynchronous operations, such as fetching available products from an API, in a more structured and predictable manner. Below are the changes made to integrate this functionality into our application.

### Files Modified

1. **[src/main.ts](src/main.ts)**
    - The `StoreModule.forRoot` method was updated to include the `availableProducts` reducer. This integrates the available products slice into the global application state.
    - The `EffectsModule.forRoot` method was updated to include `AvailableProductEffects`. This enables the application to listen for actions related to available products and handle them using defined effects.

2. **[src/app/state/actions/available-product.actions.ts](src/app/state/actions/available-product.actions.ts)**
    - Defined actions for loading available products, handling successful load, and handling load failures. These actions allow us to trigger and respond to different stages of the asynchronous process of fetching available products.

3. **[src/app/state/effects/available-product.effects.ts](src/app/state/effects/available-product.effects.ts)**
    - Implemented `AvailableProductEffects` which listens for the `loadAvailableProducts` action and triggers a service call to fetch available products. Depending on the outcome, it dispatches either a `loadAvailableProductsSuccess` or `loadAvailableProductsFailure` action.

4. **[src/app/state/reducers/available-product.reducer.ts](src/app/state/reducers/available-product.reducer.ts)**
    - Created a reducer for the available products slice of state. This reducer updates the state based on the actions dispatched by the effects, handling the initial load, successful fetch, and errors.

### Purpose of Changes

The primary goal of these changes is to centralize and manage the state of available products in our application using NgRx. This approach provides several benefits:

- **Predictability**: By managing the state in a single place and updating it in a predictable manner, we reduce the complexity of state management across the application.
- **Maintainability**: Separating the state management logic into actions, reducers, and effects makes the codebase easier to understand and maintain.
- **Asynchronous Handling**: NgRx effects are particularly useful for handling side effects, such as asynchronous API calls, in a clean and organized way.

By implementing these changes, we have laid the groundwork for a robust and scalable state management solution within our Angular application.