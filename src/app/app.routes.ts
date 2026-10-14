import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', title: 'Inicio | Mi Portafolio Angular', loadComponent: () => import('./home.component').then((c) => c.HomeComponent)},
  {path: '**', redirectTo: ''}
];
