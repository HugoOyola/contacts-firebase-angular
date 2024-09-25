import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"app-contacts-e57e1","appId":"1:204800777813:web:d7bb972a16e0c0e8513edc","storageBucket":"app-contacts-e57e1.appspot.com","apiKey":"AIzaSyCnQcMeIy_JSePZ49LFDJGZiwm6bt2f4Uw","authDomain":"app-contacts-e57e1.firebaseapp.com","messagingSenderId":"204800777813"})), provideFirestore(() => getFirestore())]
};
