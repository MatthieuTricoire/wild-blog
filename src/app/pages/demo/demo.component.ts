import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/shared/button/button.component';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  buttonClicked: string | null = null;

  handleButtonClicked(buttonName: string) {
    this.buttonClicked = buttonName;
  }
}
