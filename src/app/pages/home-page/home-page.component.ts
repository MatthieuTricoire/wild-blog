import { Component, inject } from '@angular/core';
import { DUMMY_ARTICLES_DIRECTIVES_QUEST } from '../../../dummy_articles';
import { CardComponent } from '../../shared/card/card.component';
import { ArticleComponent } from '../../articles/article/article.component';
import { ArticlesComponent } from '../../articles/articles.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { SignupFormComponent } from '../../components/signup-form/signup-form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CardComponent,
    ArticleComponent,
    ArticlesComponent,
    CommonModule,
    RouterLink,
    ContactFormComponent,
    SignupFormComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  router: Router = inject(Router);
  title = 'Bienvenue sur le Wild Blog de Matthieu !';
  articles = DUMMY_ARTICLES_DIRECTIVES_QUEST;

  isAnyArticlePublished = this.articles.some((a) => a.isPublished === true);

  goTo(id: number) {
    this.router.navigate(['/article/', id]);
  }
}
