import { Injectable, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class SignupFormService {
  formBuilder = inject(FormBuilder);

  private securePasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value || '';
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasSpecialChar = /[!@#$%^&*().,\\?":{}|<>]/.test(value);
      const hasDigit = /\d/.test(value);
      const isValidLength = value.length >= 12;

      const passwordIsValid =
        hasUpperCase &&
        hasLowerCase &&
        hasDigit &&
        hasSpecialChar &&
        isValidLength;

      return passwordIsValid ? null : { securePassword: true };
    };
  }

  private passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get('assword')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;

      return password === confirmPassword ? null : { mismatchPassword: true };
    };
  }

  createSignUpForm(): FormGroup {
    return this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      passwords: this.formBuilder.group(
        {
          password: ['', [Validators.required, this.securePasswordValidator()]],
          confirmPassword: [''],
        },
        { validators: [this.passwordMatchValidator()] },
      ),
    });
  }

  submitSignUpForm(signUpForm: FormGroup): void {
    if (signUpForm.valid) {
      console.log('Form send with :', signUpForm.value);
    } else {
      console.log('Error during sending form: ', signUpForm.errors);
    }
  }
}
