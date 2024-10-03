import { Component, inject } from '@angular/core';
import { DUMMY_ARTICLES_DIRECTIVES_QUEST } from '../../../dummy_articles';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { SignupFormComponent } from '../../components/signup-form/signup-form.component';
import { CardComponent } from '../../components/shared/card/card.component';
import { ArticleCardComponent } from '../../components/articles/article-card/article-card.component';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ContactFormComponent,
    SignupFormComponent,
    CardComponent,
    ArticleCardComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  router: Router = inject(Router);
  title = 'Bienvenue sur le Wild Blog de Matthieu !';
  articles: Article[] = DUMMY_ARTICLES_DIRECTIVES_QUEST;

  goTo(id: number) {
    this.router.navigate(['/article/', id]);
  }

  addToFavorite(id: number) {
    const articleToUpdate = this.articles.filter((a) => a.id === id);
    articleToUpdate[0].isFavorite = !articleToUpdate[0].isFavorite;
  }
}
