import { Component, OnInit } from "@angular/core";
import * as JWT from "jwt-decode";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    const token = localStorage.getItem("access_token");
    const decoded = JWT(token);
  }
}
