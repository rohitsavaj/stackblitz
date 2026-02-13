import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { Common } from '../core/services/common';

export const appConfig: ApplicationConfig = {


  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAppInitializer(() => {
      console.log('App initialized');
      // const common = inject(Common);
      // common.getUsersPromise().then(data => {
      //   console.log(data);
      // }).catch(err => {
      //   console.error(err);
      // });
      // common.getUsersObs().subscribe({
      //   next: (data) => {
      //     console.log(data);
      //   },

      // });
    })
  ]
};
