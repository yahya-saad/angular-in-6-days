import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { Reservation } from '../models/reservation';
import { RouterLink } from '@angular/router';
import { ReservationsApi } from '../services/reservations-api';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reservation-list',
  imports: [RouterLink, DatePipe],
  templateUrl: './reservation-list.html',
  styleUrl: './reservation-list.scss',
})
export class ReservationList {
  reservationService = inject(ReservationsApi);
  reservations = signal<Reservation[]>([]);

  constructor() {
    this.reservationService.getReservations().subscribe((reservations) => {
      this.reservations.set(reservations);
    });
  }

  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id);
  }
}
