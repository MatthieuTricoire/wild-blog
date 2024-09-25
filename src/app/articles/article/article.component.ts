import { Component, Input } from '@angular/core';
import { Article } from '../../../types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  @Input({ required: true }) article!: Article;
  comments: string[] = [];
  enteredComment: string = '';

  togglePublication() {
    this.article.isPublished = !this.article.isPublished;
  }

  onSubmit() {
    if (this.enteredComment.length > 0) {
      this.comments?.push(this.enteredComment);
    }
    this.enteredComment = '';
  }
}
