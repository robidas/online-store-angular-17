import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { chosenProductReducer } from './app/state/reducers/chosen-product.reducer';

const extendedAppConfig = {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    importProvidersFrom(
      StoreModule.forRoot({ chosenProducts: chosenProductReducer }),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true })
    )
  ]
};

bootstrapApplication(AppComponent, extendedAppConfig)
  .catch((err) => console.error(err));
