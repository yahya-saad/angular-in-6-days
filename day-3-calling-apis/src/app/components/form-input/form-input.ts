import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-input.html',
  styleUrl: './form-input.css',
})
export class FormInputComponent {
  form = input.required<FormGroup>();
  controlName = input.required<string>();
  label = input<string>('');
  type = input<string>('text');
  placeholder = input<string>('');
  min = input<string>('');
  errors = input<{ [key: string]: string }>({});
  objectKeys = Object.keys;

  get control(): FormControl {
    return this.form().get(this.controlName()) as FormControl;
  }
}
