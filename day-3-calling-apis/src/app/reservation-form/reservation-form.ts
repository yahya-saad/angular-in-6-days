import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormInput } from '../components/form-input/form-input';
import { ReservationService } from '../services/reservation';

@Component({
  selector: 'app-reservation-form',
  imports: [FormsModule, ReactiveFormsModule, RouterLink, CommonModule, FormInput],
  templateUrl: './reservation-form.html',
  styleUrl: './reservation-form.scss',
})
export class ReservationForm implements OnInit {
  title = 'New Reservation';
  id: string | null = null;
  reservationForm: FormGroup = new FormGroup({});

  formBuilder = inject(FormBuilder);
  reservationService = inject(ReservationService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', [Validators.required, Validators.minLength(3)]],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: [1, [Validators.required, Validators.min(1)]],
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      const reservation = this.reservationService.getReservationById(this.id);
      if (reservation) {
        this.reservationForm.patchValue(reservation);
        this.title = 'Edit Reservation';
      } else {
        this.router.navigate(['/reservations']);
      }
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      const reservationData = this.reservationForm.value;
      if (this.id) this.reservationService.updateReservation({ ...reservationData, id: this.id });
      else this.reservationService.addReservation(reservationData);

      this.reservationForm.reset();

      this.router.navigate(['/reservations']);
    }
  }
}
