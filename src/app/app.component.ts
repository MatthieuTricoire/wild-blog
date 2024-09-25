import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './shared/card/card.component';
import { ArticleComponent } from './articles/article/article.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, ArticleComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Bienvenue sur le Wild Blog de Matthieu !';
}
