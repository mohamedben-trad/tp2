// src/app/article-list/article-list.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticleFormComponent } from '../article-form/article-form.component';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ArticleFormComponent],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  articles: Article[] = [
    { title: 'first Article', photo: 'https://spacenet.tn/200008-large_default/clavier-gamer-mecanique-white-shark-shinobi-rgb-switch-rouge-noir.jpg', publicationDate: new Date(), description: 'clavier gamer', score: 0 },
    { title: 'scond Article', photo: 'https://www.sbsinformatique.com/16763/tunisie/home/souris-gamer-redragon-reaping-m987-k-tunisie.jpg', publicationDate: new Date(), description: 'souris', score: 0 }
  ];
  
  searchTerm: string = '';
  showForm: boolean = false;

  upVote(article: Article) {
    article.score += 1;
    this.sortArticles();
  }

  downVote(article: Article) {
    if (article.score > 0) article.score -= 1;
    this.sortArticles();
  }

  sortArticles() {
    this.articles.sort((a, b) => b.score - a.score);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addArticle(newArticle: Article) {
    this.articles.push(newArticle);
    this.sortArticles();
    this.showForm = false;
  }

  get filteredArticles() {
    return this.articles.filter(article =>
      article.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
