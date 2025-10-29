import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'form-input',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-input.html',
  styleUrl: './form-input.scss',
})
export class FormInput implements OnInit {
  form = input.required<FormGroup>();
  controlName = input.required<string>();
  type = input.required<string>();
  label = input<string>('');
  placeholder = input<string>('');
  min = input<string>('');
  errorMessages = input<{ [key: string]: string }>({});

  control: FormControl | null = null;

  ngOnInit() {
    this.control = this.form().get(this.controlName()) as FormControl | null;
    if (!this.control) {
      console.warn(`⚠️ Control '${this.controlName()}' not found in form`, this.form());
      this.control = new FormControl();
    }
  }
}
