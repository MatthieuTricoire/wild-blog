import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnteredContactValues } from './contact.model';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  enteredContactValues: EnteredContactValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  onSubmit() {
    console.log(this.enteredContactValues);
  }
}
