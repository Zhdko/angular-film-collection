import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'catalog',
    loadComponent: () => import('../app/pages/catalog/catalog').then((m) => m.Catalog),
    data: { breadcrumb: 'catalog' },
  },
  {
    path: 'film/:id',
    loadComponent: () =>
      import('../app/pages/movie-details/movie-details').then((m) => m.MovieDetails),
    data: { breadcrumb: 'loading...' },
  },
  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full',
  },
];
