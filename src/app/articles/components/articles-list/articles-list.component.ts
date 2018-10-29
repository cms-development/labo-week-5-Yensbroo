import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ArticleService } from "src/app/services/article.service";
import { FileService } from "src/app/services/file.service";

@Component({
  selector: "app-articles-list",
  templateUrl: "./articles-list.component.html",
  styleUrls: ["./articles-list.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ArticlesListComponent implements OnInit {
  articles: [];
  authors: [];
  constructor(private articleService: ArticleService, private fileService: FileService) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articleService.getArticles().subscribe(res => {
      this.articles = res.data;
      console.log(this.articles);
    });
  }

  getArticleImage(id) {
    this.fileService.getFile(id).subscribe(res => {
      const imageURL = "http://localhost:8888" + res.data.attributes.url;
      console.log(imageURL);
      return imageURL;
    });
  }
}
