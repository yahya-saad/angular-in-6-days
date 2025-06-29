import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../models/appointment';

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css',
})
export class AppointmentList implements OnInit {
  newTitle = '';
  newDate = new Date();
  appointments: Appointment[] = [];

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem('d1-appointments');
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  addAppointment() {
    const trimmedTitle = this.newTitle.trim();
    if (trimmedTitle.length) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newTitle,
        date: this.newDate,
      };

      this.appointments.push(newAppointment);

      this.newTitle = '';
      this.newDate = new Date();

      localStorage.setItem(
        'd1-appointments',
        JSON.stringify(this.appointments)
      );
    }
  }

  deleteAppointment(idx: number) {
    this.appointments.splice(idx, 1);
    localStorage.setItem('d1-appointments', JSON.stringify(this.appointments));
  }
}
