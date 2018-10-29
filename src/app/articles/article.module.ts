import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticlesListComponent } from "./components/articles-list/articles-list.component";
import { ArticlesPageComponent } from "./pages/articles-page/articles-page.component";
import { ArticlePageComponent } from "./pages/article-page/article-page.component";
import { ArticleDetailComponent } from "./components/article-detail/article-detail.component";
import { EditArticleComponent } from "./components/edit-article/edit-article.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AddArticleComponent } from './components/add-article/add-article.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [
    ArticlesListComponent,
    ArticlesPageComponent,
    ArticlePageComponent,
    ArticleDetailComponent,
    EditArticleComponent,
    AddArticleComponent
  ]
})
export class ArticleModule {}
