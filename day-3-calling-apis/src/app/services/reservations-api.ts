import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { environment } from '../../env.dev';

@Injectable({
  providedIn: 'root',
})
export class ReservationsApi {
  private apiUrl = environment.apiUrl;
  httpClient = inject(HttpClient);

  getReservations() {
    return this.httpClient.get<Reservation[]>(`${this.apiUrl}/reservations`);
  }

  getReservationById(id: string) {
    return this.httpClient.get<Reservation>(`${this.apiUrl}/reservations/${id}`);
  }

  addReservation(reservation: Reservation) {
    return this.httpClient.post<Reservation>(`${this.apiUrl}/reservations`, reservation);
  }
  updateReservation(reservation: Reservation) {
    return this.httpClient.put<Reservation>(
      `${this.apiUrl}/reservations/${reservation.id}`,
      reservation
    );
  }

  deleteReservation(id: string) {
    return this.httpClient.delete<void>(`${this.apiUrl}/reservations/${id}`);
  }
}
