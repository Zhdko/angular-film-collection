import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../app/pages/catalog/catalog').then((m) => m.Catalog),
  },
  {
    path: 'catalog',
    redirectTo: '',
    pathMatch: 'full',
  },
];
