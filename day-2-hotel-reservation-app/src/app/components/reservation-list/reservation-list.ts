import { Component, inject, OnInit } from '@angular/core';
import { Reservation } from '../../models/reservation';
import { ReservationService } from '../../services/Reservation/reservation-service';

@Component({
  selector: 'app-reservation-list',
  standalone: false,
  templateUrl: './reservation-list.html',
  styleUrl: './reservation-list.css',
})
export class ReservationList implements OnInit {
  reservations: Reservation[] = [];
  resrvationService = inject(ReservationService);

  ngOnInit(): void {
    this.reservations = this.resrvationService.getReservations();
  }

  deleteReservation(id: string) {
    this.resrvationService.deleteReservation(id);
  }
}
