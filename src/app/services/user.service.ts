import { Injectable } from "@angular/core";
import { HttpClient } from "selenium-webdriver/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  apiURL = "";
  constructor(private http: HttpClient) {}

  getUser() {
    //this.http.get();
  }
}
