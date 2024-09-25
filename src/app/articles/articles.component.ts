import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { DUMMY_ARTICLES } from '../../dummy_articles';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent {
  articles = DUMMY_ARTICLES;
}
