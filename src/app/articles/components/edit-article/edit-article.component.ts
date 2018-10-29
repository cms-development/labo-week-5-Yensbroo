import { Component, OnInit } from "@angular/core";
import { ArticleService } from "src/app/services/article.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Article } from "src/app/models/article";

@Component({
  selector: "app-edit-article",
  templateUrl: "./edit-article.component.html",
  styleUrls: ["./edit-article.component.scss"]
})
export class EditArticleComponent implements OnInit {
  article: Article = new Article();
  id = this.route.snapshot.paramMap.get("id");
  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    this.articleService.getArticle(this.id).subscribe(res => {
      this.article = res.data;
    });
  }

  editArticle() {
    const data = {
      data: {
        type: this.article.type,
        id: this.id,
        attributes: {
          title: this.article.attributes.title,
          body: {
            value: this.article.attributes.body.value
          }
        }
      }
    };
    this.articleService.editArticle(this.id, data).subscribe(() => {
      this.router.navigate([`artikel/${this.id}`]);
    });
  }
}
