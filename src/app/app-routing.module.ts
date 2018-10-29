import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticlesPageComponent } from "./articles/pages/articles-page/articles-page.component";
import { ArticlePageComponent } from "./articles/pages/article-page/article-page.component";
import { LoginComponent } from "./authentication/login/login.component";
import { EditArticleComponent } from "./articles/components/edit-article/edit-article.component";
import { AddArticleComponent } from "./articles/components/add-article/add-article.component";

const routes: Routes = [
  { path: "", component: ArticlesPageComponent },
  { path: "artikel/:id", component: ArticlePageComponent },
  { path: "artikel/bewerk/:id", component: EditArticleComponent },
  { path: "login", component: LoginComponent },
  { path: "nieuw-artikel", component: AddArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
