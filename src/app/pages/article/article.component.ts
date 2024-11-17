import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Article } from '../../models/article.model';
import { Subscription } from 'rxjs';
import { CenterContainerComponent } from '../../components/shared/center-container/center-container.component';
import { Heart, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CenterContainerComponent, LucideAngularModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  router: Router = inject(Router);
  http = inject(HttpClient);
  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;
  article!: Article;
  articleSubscription!: Subscription;
  readonly heart = Heart;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
    this.getArticleById(this.articleId);
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }

  getArticleById(articleId: number) {
    this.articleSubscription = this.http
      .get<Article>(`http://localhost:3000/articles/${articleId}`)
      .subscribe((article: Article) => {
        this.article = article;
      });
  }

  goTo() {
    this.router.navigate(['/']);
  }
}
