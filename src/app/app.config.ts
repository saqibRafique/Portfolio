import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp } from 'firebase/app';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const firebaseConfig = {
  apiKey: "AIzaSyBFob453n5hURDTFAA13kvisbjau6Q54aQ",
  authDomain: "saqib-portfolio-87708.firebaseapp.com",
  projectId: "saqib-portfolio-87708",
  storageBucket: "saqib-portfolio-87708.appspot.com",
  messagingSenderId: "752189814918",
  appId: "1:752189814918:web:4662a3bf6ba87fd5593907",
  measurementId: "G-NJS5BHX479"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
};
