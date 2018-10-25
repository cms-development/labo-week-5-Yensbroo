import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticlesListComponent } from "./components/articles-list/articles-list.component";
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ArticlesListComponent, ArticlesPageComponent, ArticlePageComponent, ArticleDetailComponent]
})
export class ArticleModule {}
