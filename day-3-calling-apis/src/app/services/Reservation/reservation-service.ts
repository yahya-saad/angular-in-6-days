import { inject, Injectable } from '@angular/core';
import { Reservation } from '../../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = 'http://localhost:3001';
  httpClient = inject(HttpClient);

  getReservations(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(`${this.apiUrl}/reservations`);
  }

  getReservation(id: string): Observable<Reservation> {
    return this.httpClient.get<Reservation>(
      `${this.apiUrl}/reservations/${id}`
    );
  }

  addReservation(reservation: Reservation): Observable<void> {
    return this.httpClient.post<void>(
      `${this.apiUrl}/reservations`,
      reservation
    );
  }

  updateReservation(
    id: string,
    updatedReservation: Reservation
  ): Observable<void> {
    return this.httpClient.put<void>(
      `${this.apiUrl}/reservations/${id}`,
      updatedReservation
    );
  }

  deleteReservation(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/reservations/${id}`);
  }
}
