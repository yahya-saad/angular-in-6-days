import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationList } from '../../components/reservation-list/reservation-list';
import { ReservationForm } from '../../components/reservation-form/reservation-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReservationForm, ReservationList],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ReservationModule {}
