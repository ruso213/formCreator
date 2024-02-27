import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from './environment/envioronments';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideAuth(() => getAuth()),
    ])
  ],
};
