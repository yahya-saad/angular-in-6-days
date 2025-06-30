import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  standalone: false,
  templateUrl: './reservation-form.html',
  styleUrl: './reservation-form.css',
})
export class ReservationForm implements OnInit {
  reservationForm: FormGroup = new FormGroup({});
  formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', [Validators.required, Validators.minLength(3)]],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: [0, [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    const reservation = this.reservationForm.value;
    if (this.reservationForm.valid) {
      console.log('Reservation:', reservation);
    } else {
      console.log('NOT VALID', reservation);
    }
  }
}
