import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Article } from '../../models/article.model';
import { Observable } from 'rxjs';
import { ArticleCardComponent } from '../articles/article-card/article-card.component';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [ArticleCardComponent, AsyncPipe],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss',
})
export class ArticlesListComponent implements OnInit {
  articles$: Observable<Article[]> | undefined;

  http = inject(HttpClient);
  router: Router = inject(Router);

  ngOnInit() {
    this.articles$ = this.http.get<Article[]>('http://localhost:3000/articles');
  }

  goTo(id: number) {
    this.router.navigate(['/article/', id]);
  }
}
