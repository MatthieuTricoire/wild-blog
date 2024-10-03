import { Component, input, output } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { Article } from '../../../models/article.model';
import { Heart, LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, CardComponent, LucideAngularModule],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
})
export class ArticleCardComponent {
  article = input.required<Article>();
  favoriteArticle = output<number>();
  readonly Heart = Heart;

  onFavorite(event: MouseEvent) {
    event.stopPropagation();
    this.favoriteArticle.emit(this.article().id);
  }
}
