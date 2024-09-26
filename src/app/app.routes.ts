import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', // Este es el Path inicial de la aplicación
    redirectTo: '/contacts', // Redirige a la ruta /contacts
    pathMatch: 'full', // Redirije a ka ruta /contacts cuando la ruta es vacia
  },
  {
    path: 'contacts', // Ruta /contacts
    loadChildren: () => import('./features/contacts/contacts.routes'),
  },
  {
    path: '**', // Cualquier otra ruta que no sea la inicial
    redirectTo: '/contacts', // Redirige a la ruta /contacts
  },
];
