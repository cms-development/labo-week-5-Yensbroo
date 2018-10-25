import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticlesPageComponent } from "./articles/pages/articles-page/articles-page.component";
import { ArticlePageComponent } from "./articles/pages/article-page/article-page.component";
import { LoginComponent } from "./authentication/login/login.component";

const routes: Routes = [
  { path: "", component: ArticlesPageComponent },
  { path: "article/:id", component: ArticlePageComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
