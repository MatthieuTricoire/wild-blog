import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  buttonColor = input<string>('lightblue');
  buttonText = input<string>('Foo');
  buttonName = output<string>();

  sendButtonName() {
    this.buttonName.emit(this.buttonText());
  }
}
