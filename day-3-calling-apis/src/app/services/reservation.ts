import { effect, Injectable, signal, Signal } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations = signal<Reservation[]>([]);

  constructor() {
    const storedReservations = localStorage.getItem('d2-reservations');
    this.reservations.set(storedReservations ? JSON.parse(storedReservations) : []);

    effect(() => {
      this.updateLocalStorage();
    });
  }

  updateLocalStorage() {
    localStorage.setItem('d2-reservations', JSON.stringify(this.reservations()));
  }

  getReservations() {
    return this.reservations;
  }

  getReservationById(id: string) {
    return this.reservations().find((reservation) => reservation.id === id);
  }

  addReservation(reservation: Reservation) {
    reservation.id = this.generateId();
    this.reservations.set([...this.reservations(), reservation]);
    console.log(this.reservations());
  }

  updateReservation(updatedReservation: Reservation) {
    const updatedReservations = this.reservations().map((reservation) =>
      reservation.id === updatedReservation.id ? updatedReservation : reservation
    );

    this.reservations.set(updatedReservations);
  }

  deleteReservation(id: string) {
    const filteredReservations = this.reservations().filter((reservation) => reservation.id !== id);
    this.reservations.set(filteredReservations);
  }

  generateId(): string {
    return Math.random().toString(36).slice(2, 9);
  }
}
