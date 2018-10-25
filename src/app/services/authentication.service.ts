import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  apiURL = "http://localhost:8888/oauth/token";
  constructor(private http: HttpClient) {}

  public login(data): Observable<any> {
    return this.http.post(this.apiURL, data);
  }
}
