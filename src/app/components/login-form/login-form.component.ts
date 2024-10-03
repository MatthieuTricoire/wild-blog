import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  formData = input<{ username: string; password: string }>({
    username: '',
    password: '',
  });
  isSubmitted = signal<boolean>(false);

  onSubmit() {
    console.log(this.formData);
    this.isSubmitted.set(true);
  }
}
