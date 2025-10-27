import { Component, input, output } from '@angular/core';
import { Appointment } from '../../models/appointment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-appointment-item',
  imports: [DatePipe],
  templateUrl: './appointment-item.html',
  styleUrl: './appointment-item.scss',
})
export class AppointmentItem {
  appointment = input.required<Appointment>();

  delete = output<Appointment>();

  onDelete() {
    this.delete.emit(this.appointment());
  }
}
