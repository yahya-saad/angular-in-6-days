import { Component, inject, OnInit, Signal } from '@angular/core';
import { ReservationService } from '../services/reservation';
import { Reservation } from '../models/reservation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  imports: [RouterLink],
  templateUrl: './reservation-list.html',
  styleUrl: './reservation-list.scss',
})
export class ReservationList implements OnInit {
  reservationService = inject(ReservationService);
  reservations!: Signal<Reservation[]>;

  ngOnInit() {
    this.reservations = this.reservationService.getReservations();
  }

  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id);
  }
}
