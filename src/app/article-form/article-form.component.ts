// src/app/article-form/article-form.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent {
  newArticle: Article = {
    title: '',
    photo: '',
    publicationDate: new Date(),
    description: '',
    score: 0
  };

  @Output() addArticle = new EventEmitter<Article>();

  onSubmit() {
    if (this.newArticle.title && this.newArticle.description) {
      this.addArticle.emit(this.newArticle);
      this.newArticle = { title: '', photo: '', publicationDate: new Date(), description: '', score: 0 };
    }
  }
}
