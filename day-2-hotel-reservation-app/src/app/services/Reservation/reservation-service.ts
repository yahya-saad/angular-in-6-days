import { Injectable } from '@angular/core';
import { Reservation } from '../../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  DB = 'd2-Reservation';
  private reservations: Reservation[] = [];

  constructor() {
    this.loadFromStorage();
  }

  private updateLocalStorage(): void {
    localStorage.setItem(this.DB, JSON.stringify(this.reservations));
  }

  private loadFromStorage(): void {
    const data = localStorage.getItem(this.DB);
    this.reservations = data ? JSON.parse(data) : [];
  }

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find((res) => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    this.updateLocalStorage();
  }

  updateReservation(id: string, updatedReservation: Reservation): void {
    const idx = this.reservations.findIndex((res) => res.id === id);
    this.reservations[idx] = updatedReservation;
    this.updateLocalStorage();
    this.updateLocalStorage();
  }

  deleteReservation(id: string): void {
    const idx = this.reservations.findIndex((res) => res.id === id);
    this.reservations.splice(idx, 1);
    this.updateLocalStorage();
  }
}
