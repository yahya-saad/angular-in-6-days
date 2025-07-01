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
  reservationService = inject(ReservationService);

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe((reservations) => {
      this.reservations = reservations;
    });
  }

  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id).subscribe(() => {
      console.log('Deleted');
    });
  }
}
