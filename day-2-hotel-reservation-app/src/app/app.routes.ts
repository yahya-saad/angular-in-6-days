import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'reservations',
    loadComponent: () =>
      import('./reservation-list/reservation-list').then((m) => m.ReservationList),
  },
  {
    path: 'new',
    loadComponent: () =>
      import('./reservation-form/reservation-form').then((m) => m.ReservationForm),
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./reservation-form/reservation-form').then((m) => m.ReservationForm),
  },
];
