// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application';
}
