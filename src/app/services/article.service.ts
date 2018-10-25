import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  apiURL = "http://localhost:8888/jsonapi/node/article";
  constructor(private http: HttpClient) {}

  getArticles(): Observable<any> {
    return this.http.get(`${this.apiURL}?include=uid`);
  }

  getArticle(id): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}?include=uid`);
  }
}
