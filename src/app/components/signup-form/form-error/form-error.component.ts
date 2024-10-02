import { Component, input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  standalone: true,
  imports: [],
  templateUrl: './form-error.component.html',
  styleUrl: './form-error.component.scss',
})
export class FormErrorComponent {
  control = input.required<AbstractControl | null>();
}
