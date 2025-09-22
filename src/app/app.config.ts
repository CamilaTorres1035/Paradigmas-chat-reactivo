import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
// Firebase imports
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideDatabase, getDatabase } from '@angular/fire/database';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_XJlWFdZvj8neSKh8u291WqcWcNfQeyg",
  authDomain: "chat-reactivo.firebaseapp.com",
  projectId: "chat-reactivo",
  storageBucket: "chat-reactivo.firebasestorage.app",
  messagingSenderId: "600409525329",
  appId: "1:600409525329:web:9b0bdab90a36d416d63c70"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())
  ]
};
