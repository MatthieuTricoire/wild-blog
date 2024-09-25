import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './shared/card/card.component';
import { ArticleComponent } from './articles/article/article.component';
import { HeaderComponent } from './header/header.component';
import { ArticlesComponent } from './articles/articles.component';
import { DUMMY_ARTICLES_DIRECTIVES_QUEST } from '../dummy_articles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardComponent,
    ArticleComponent,
    HeaderComponent,
    ArticlesComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Bienvenue sur le Wild Blog de Matthieu !';
  articles = DUMMY_ARTICLES_DIRECTIVES_QUEST;

  isAnyArticlePublished = this.articles.some((a) => a.isPublished === true);

}
