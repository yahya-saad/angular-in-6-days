import { Component, effect, OnInit, signal } from '@angular/core';
import { AppointmentItem } from '../components/appointment-item/appointment-item';
import { appointmentsData } from '../data/appointment-data';
import { Appointment } from '../models/appointment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-list',
  imports: [AppointmentItem, FormsModule],
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.scss',
})
export class AppointmentList implements OnInit {
  appointments = signal<Appointment[]>([]);
  newTitle = '';
  newDate = '';

  ngOnInit() {
    const storedAppointments = localStorage.getItem('d1-appointments');
    if (storedAppointments) this.appointments.set(JSON.parse(storedAppointments));
    else this.appointments.set(appointmentsData);
  }

  constructor() {
    effect(() => {
      this.updateLocalStorage();
    });
  }

  private resetInputs() {
    this.newTitle = '';
    this.newDate = '';
  }

  private updateLocalStorage() {
    localStorage.setItem('d1-appointments', JSON.stringify(this.appointments()));
  }

  addAppointment() {
    if (this.newTitle && this.newDate) {
      const newAppointment: Appointment = {
        id: Date.now(),
        title: this.newTitle,
        date: new Date(this.newDate),
      };
      this.appointments.update((prev) => [...prev, newAppointment]);
      this.resetInputs();
    }
  }

  handleDelete(appointment: Appointment) {
    this.appointments.update((prev) => prev.filter((a) => a.id !== appointment.id));
  }
}
