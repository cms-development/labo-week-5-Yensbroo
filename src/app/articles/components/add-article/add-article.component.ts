import { Component, OnInit } from "@angular/core";
import { ArticleService } from "src/app/services/article.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-article",
  templateUrl: "./add-article.component.html",
  styleUrls: ["./add-article.component.scss"]
})
export class AddArticleComponent implements OnInit {
  titleText: String;
  bodyText: String;
  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {}

  addArticle() {
    const data = {
      data: {
        type: "node--article",
        attributes: {
          title: this.titleText,
          body: {
            value: this.bodyText
          }
        }
      }
    };
    this.articleService.addArticle(data).subscribe(res => {
      const id = res.data.id;
      this.router.navigate([`artikel/${id}`]);
    });
  }
}
