import { Component, OnInit } from "@angular/core";
import { ArticleService } from "src/app/services/article.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FileService } from "src/app/services/file.service";
import * as JWT from "jwt-decode";

@Component({
  selector: "app-article-detail",
  templateUrl: "./article-detail.component.html",
  styleUrls: ["./article-detail.component.scss"]
})
export class ArticleDetailComponent implements OnInit {
  article: [];
  image: [];
  user: [];
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private fileService: FileService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getArticle();
    this.getUser();
  }

  getArticle() {
    const id = this.route.snapshot.paramMap.get("id");
    this.articleService.getArticle(id).subscribe(res => {
      this.article = res;
      console.log(this.article);
      this.getImage(res.data.relationships.field_image.data.id);
    });
  }

  getImage(id) {
    this.fileService.getFile(id).subscribe(res => {
      this.image = res.data.attributes;
    });
  }

  getUser() {
    const token = localStorage.getItem("access_token");
    const decoded = JWT(token);
    this.user = decoded;
  }

  edit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.router.navigate([`artikel/bewerk/${id}`]);
  }

  delete() {
    const id = this.route.snapshot.paramMap.get("id");
    this.articleService.deleteArticle(id).subscribe(() => {
      this.router.navigate(["/"]);
    });
  }
}
