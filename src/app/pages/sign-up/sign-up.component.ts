import { Component } from '@angular/core';
import { SignupFormComponent } from '../../components/signup-form/signup-form.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [SignupFormComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {}
