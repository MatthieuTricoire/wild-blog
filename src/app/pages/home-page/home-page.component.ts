import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { SignupFormComponent } from '../../components/signup-form/signup-form.component';
import { CardComponent } from '../../components/shared/card/card.component';
import { ArticleCardComponent } from '../../components/articles/article-card/article-card.component';
import { ArticlesListComponent } from '../../components/articles-list/articles-list.component';

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
    ArticlesListComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  router: Router = inject(Router);
  title = 'Bienvenue sur le Wild Blog de Matthieu !';

  goTo(id: number) {
    this.router.navigate(['/article/', id]);
  }
}
