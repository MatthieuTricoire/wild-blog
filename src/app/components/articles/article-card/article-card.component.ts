import { Component, input } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
})
export class ArticleCardComponent {
  article = input.required<Article>();
}
