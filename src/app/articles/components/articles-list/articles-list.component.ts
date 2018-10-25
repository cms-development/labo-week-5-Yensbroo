import { Component, OnInit } from "@angular/core";
import { ArticleService } from "src/app/services/article.service";

@Component({
  selector: "app-articles-list",
  templateUrl: "./articles-list.component.html",
  styleUrls: ["./articles-list.component.scss"]
})
export class ArticlesListComponent implements OnInit {
  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articleService.getArticles().subscribe(res => {
      console.log(res.data);
    });
  }
}
