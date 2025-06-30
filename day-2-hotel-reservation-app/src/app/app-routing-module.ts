import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationList } from './components/reservation-list/reservation-list';
import { ReservationForm } from './components/reservation-form/reservation-form';
import { Home } from './components/home/home';

const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'list',
    component: ReservationList,
  },
  {
    path: 'new',
    component: ReservationForm,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
