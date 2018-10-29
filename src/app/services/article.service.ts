import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  apiURL = `${environment.api.baseURL}${environment.api.endpoints.article}`;
  constructor(private http: HttpClient) {}

  getArticles(): Observable<any> {
    return this.http.get(`${this.apiURL}?include=uid`);
  }

  getArticle(id): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}?include=uid`);
  }

  getAuthor(url): Observable<any> {
    return this.http.get(`${url}`);
  }

  editArticle(id, data): Observable<any> {
    return this.http.patch(`${this.apiURL}/${id}`, data);
  }

  addArticle(data): Observable<any> {
    return this.http.post(this.apiURL, data);
  }

  deleteArticle(id): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
