/**
 * main.ts
 * 
 * This is the main entry point of the Angular application. It bootstraps the
 * root application component, applying the necessary configurations and
 * providers.
 */
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { chosenProductReducer } from './app/state/reducers/chosen-product.reducer';

// Create an extended application configuration that includes the original
// configuration and adds the necessary providers for NgRx Store and
// Store DevTools.
const extendedAppConfig = {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    
    // Importing NgRx StoreModule and StoreDevtoolsModule at the application
    // level ensures that the state management is properly configured. Since
    // standalone components do not support 'Module.forRoot()' style
    // configurations directly in their imports array, these configurations 
    // must be applied at the bootstrap level. This approach integrates NgRx
    // store management and dev tools, providing a centralized state 
    // management solution for the application.
    importProvidersFrom(

      // StoreModule.forRoot() configures the NGRX Store state management using
      // a configuration object to define the state slices and their reducers,
      // thereby managing how the state slices are updated in response to
      // actions. State slices are defined in the AppState interface, found in
      // the src/app/state/app.state.ts file. Reducer functions are defined in
      // the reducer files, found in the src/app/state/reducers directory.
      // Property names must match property names in the AppState interface, 
      // and property values must be names of reducer functions that define how
      // state updates are handled.
      StoreModule.forRoot({ chosenProducts: chosenProductReducer }),

      // StoreDevtoolsModule.instrument() configures the Redux DevTools
      // integration with the NgRx store. 
      StoreDevtoolsModule.instrument({ 
        
        // The maxAge parameter sets the maximum number of actions to be stored in 
        // the history (25 in this case), which helps to limit memory usage. 
        maxAge: 25, 

        // The logOnly parameter, when set to true, restricts DevTools to logging actions 
        // without allowing state changes, ensuring a read-only view of the state transitions.
        logOnly: true })
    )
  ]
};

// Bootstrap the root application component with the extended configuration.
bootstrapApplication(AppComponent, extendedAppConfig)
  .catch((err) => console.error(err));
