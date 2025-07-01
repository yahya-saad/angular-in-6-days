import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../../services/Reservation/reservation-service';
import { Reservation } from '../../models/reservation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  standalone: false,
  templateUrl: './reservation-form.html',
  styleUrl: './reservation-form.css',
})
export class ReservationForm implements OnInit {
  reservationForm: FormGroup = new FormGroup({});
  formBuilder = inject(FormBuilder);
  reservationService = inject(ReservationService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  id: string | null = '';
  title = 'New Reservation';

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      id: [''],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', [Validators.required, Validators.minLength(3)]],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: [0, [Validators.required, Validators.min(1)]],
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      let reservation = this.reservationService
        .getReservation(this.id)
        .subscribe((reservation) => {
          console.log(reservation);
          if (reservation) this.reservationForm.patchValue(reservation!);
        });
      this.title = 'Edit Reservation';
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;

      if (this.id) {
        this.reservationService
          .updateReservation(this.id, reservation)
          .subscribe(() => console.log('Updated'));
      } else {
        this.reservationService
          .addReservation(reservation)
          .subscribe(() => console.log('Added'));
      }

      this.router.navigate(['/list']);
    }
  }
}
