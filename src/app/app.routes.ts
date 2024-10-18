import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'details',
    children: [
      {
        path: ':id',
        loadComponent: () =>
          import('./pages/details/details.component').then(
            (c) => c.DetailsComponent,
          ),
      },
    ],
  }
];
