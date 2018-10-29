import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FileService {
  apiURL = `${environment.api.baseURL}${environment.api.endpoints.file}`;
  constructor(private http: HttpClient) {}

  getFile(id): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }
}
