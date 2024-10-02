import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SignupFormService } from './signup-form.service';
import { FormErrorComponent } from './form-error/form-error.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule, FormErrorComponent],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss',
})
export class SignupFormComponent {
  private signUpFormService = inject(SignupFormService);

  signUpForm: FormGroup = this.signUpFormService.createSignUpForm();

  onSubmit() {
    this.signUpFormService.submitSignUpForm(this.signUpForm);
  }
}
